import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import axios from 'axios'
import network from '../constants/Network'

export default class AllCategoriesScreen extends React.Component {
  state = {
    categories: []
  }

  fetchTutorialCategories = async () => {
    let res = await axios.get(`${ network.API_URL }/tutorials/categories`)
    this.setState({ categories: res.data.categories })
  }

  handleCategoryPress = (category) => {
    this.props.navigation.navigate({
      routeName: 'Category',
      key: category.slug,
      params: {
        name: category.name
      }
    })
  }

  componentDidMount = () => {
    this.fetchTutorialCategories()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={{ marginBottom: 20 }}>
          {this.state.categories.map(category => (
            <ListItem
              onPress={() => this.handleCategoryPress(category)}
              key={category.slug}
              roundAvatar
              avatar={category.image}
              title={category.name}
            />
          ))}
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})