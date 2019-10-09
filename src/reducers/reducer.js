const initialState =[ 
    {
        item: 'Eat Ramen',
        completed: false,
        id:` ${new Date.now()}${Math.random()}`
    }, 
    {
        item: 'Find Sasuke', 
        completed: false, 
        id: `${new Date.now()}${Math.random()}`
    },
    {
        item: 'Become Hokage', 
        completed: false, 
        id: `${new Date.now()}${Math.random()}`
    }

]


export default initialState; 