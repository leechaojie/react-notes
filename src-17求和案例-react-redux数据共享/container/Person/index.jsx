import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

  // nameNode = c => { this.nameNode = c }

  addPerson = () => {
    const { nameNode: {value: name}, ageNode: {value: age} } = this
    const personsObj = {id: nanoid(), name, age}
    this.props.add(personsObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    return (
      <div style={{marginTop: '20px'}}>
        <h2>Person 组件，上方组件的求和结果为 {this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
        <input ref={c => this.ageNode = c} type="number" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.person.map(person => {
              return (
                <li key={person.id}>
                  {person.name} - {person.age}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    person: state.person,
    count: state.count
  }), // 映射状态
  {
    add: createAddPersonAction
  }
)(Person)

