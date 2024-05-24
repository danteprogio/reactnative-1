import axios from 'axios';

const baseUrl = 'https://8e29-143-44-185-160.ngrok-free.app'
export const getTodoList = async () => {
    let {data} = await axios.get(baseUrl+`/api/todo`)
    return data.results;
};



// const baseUrl = 'https://8e29-143-44-185-160.ngrok-free.app/api'
// export const getTodoList = async () => {
//     return axios.get(`${baseUrl}/todo`)
//         .then(({data}) =>data.results)
// };



// export const addTask = async (__taskTitle) => {
//     let {data} = await axios.post(`/api/todo`,{
//         task: __taskTitle
//     })
//     return data
// };


// export const deleteTask = async (deleteTask) => {
//     let {data} = await axios.delete(`/api/todo/${deleteTask}`)
//     return data
// };

export const updateTask = async (updateTask,type,newTask = 'Sample') => {
   
    const checkingOfType =()=>{
        console.log(type)
        let typeOfUpdate = '';
        type === 'Status' ?

            typeOfUpdate = {
                status: "complete"
            }
        :
            typeOfUpdate = {
                taskname: newTask
            }
        return typeOfUpdate
    }

    let {data} = await axios.patch(`/api/todo/${updateTask}`,checkingOfType())
    return data
};




