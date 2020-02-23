
// function TodoList() {
//   const todos = useStoreState((state: State<StoreModel>) => state.todos.items)
//   const add = useStoreActions((actions: Actions<StoreModel>) => actions.todos.add)
//   return (
//     <div>
//       {todos.map((todo: any, idx: any) => <div key={idx}>{todo}</div>)}
//       { console.log('todolist 1')}
//       <button onClick={() => add('dupsko')}>
//         add
//       </button>
//     </div>
//   )
// }


// function TodoList2() {
//   const todos = useStoreState((state: State<StoreModel>) => state.todos2.items)
//   const add = useStoreActions((actions: Actions<StoreModel>) => actions.todos2.add)
//   return (
//     <div>
//       {todos.map((todo: any, idx: any) => <div key={idx}>{todo}</div>)}
//       { console.log('todolist 2')}
//       <button onClick={() => add('dupsko')}>
//         add
//       </button>
//     </div>
//   )
// }





// const UserContext = React.createContext({});
// const { Provider, Consumer } = UserContext;
// class UserProvider extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       name: "Colin",
//       setName: this.setName,
//     };
//   }

//   setName = (name: any) => { 
//       this.setState({name});
//   }

//   render() {
//     return <Provider value={this.state}>{this.props.children}</Provider>;
//   }
// }
// const withUser = (Component: any) => (props: any) => (
//   <Consumer>{user => <Component {...user} {...props} />}</Consumer>
// );

// const TempA = ({name}: any) => { 
//   return <h1>A: {name}</h1>
// }

// const TempB = ({name, setName}: any) => { 
//   return (
//     <React.Fragment>
//     <h1>B: {name}</h1>
//     <button onClick={() => setName('Ricardo')}>change name</button>
//     </React.Fragment>
//   )
// }

// const A = withUser(TempA);
// const B = () => {
//   return (
//     <div>
//       bbbbb
//     </div>
//   )
// }


// const D = React.memo(() => {
//   return (
//     <div>
//       sadsadasdsa
//     </div>
//   )
// })


// const Child = () => {
//   const { state, dispatch } = useStateValue();
//   return (
//     <div>
//       <button onClick={() => {dispatch({ type: '@_EXAMPLE/CHANGE_THEME', payload: { theme: {primary: 'blue' } } })}}>
//         !
//       </button>
//       {
//         Child
//       }
//       {
//         JSON.stringify(state)
//       }
//     </div>
//   )
// }

export const a = 1;