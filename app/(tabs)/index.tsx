import { todoListData } from '@/components/Context/TodoContext'
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'

const stories = [
  {
    id: 1,
    name: 'Jane',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
  },
  {
    id: 2,
    name: 'John',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
  },
  {
    id: 3,
    name: 'Katie',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
  },
  {
    id: 4,
    name: 'Michael',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
  },
  {
    id: 5,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
  },
  {
    id: 6,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    id: 7,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
  },
  {
    id: 8,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
  },
  {
    id: 9,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
  },
]

const StoryList = () => {
  return (
    <View style={styles.storyList}>
      <Text style={styles.storyListText}>Stories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          <View style={styles.storyContainer} key={story.id}>
            <Image style={styles.storyImage} source={{ uri: story.image }} />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const Home = () => {
  const {setTodoLists,todoLists} = useContext<any>(todoListData);
  const renderItem1 = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image style={styles.avatar} source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png' }} />
          <Text style={styles.sender}>Dante Progio</Text>
        </View>
        <View style={styles.cardBody}>
          {
            item.status === 'complete' ? 
              <Image style={styles.cardImage} source={{ uri: 'https://previews.123rf.com/images/karolinamadej/karolinamadej1807/karolinamadej180700297/114831384-business-illustration-concept-with-cartoon-stickman-holding-board-with-text-task-completed-vector.jpg' }} />
            :
              <Image style={styles.cardImage} source={{ uri: 'https://media.istockphoto.com/id/1253437873/vector/yellow-warning-sign-work-in-progress-background.jpg?s=1024x1024&w=is&k=20&c=2uNjNxC_uLtawQ7zyOgI91VVCc3UEyeP7ylgeMFWGWA=' }} />
            
          }
          <Text style={styles.cardText}>Task: {item.task}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StoryList />
      <FlatList data={todoLists} renderItem={renderItem1} keyExtractor={item => item.id.toString()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  storyList: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  storyListText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  storyName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor:'white'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  cardText: {
    marginTop: 10,
  },
})

export default Home
