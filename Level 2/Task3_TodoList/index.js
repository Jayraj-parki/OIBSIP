let list = [
    
]
let inputTitle = document.getElementById("inputTitle")
let inputDesc = document.getElementById("inputDesc")
let allList = document.getElementById("allList")
let pendingList = document.getElementById("pendingList")
let completedList = document.getElementById("completedList")



const changeList = () => {
    allList.innerHTML = list.map((val) => {
        return (
            `<tr >        
                <td>${val?.title} </td>
                <td>${val?.desc}</td>
                <td>
                    <div class="actions">
                        <button onClick="deleteTask(${val.id})" ><i class="fa-regular fa-trash-can"></i></i></button>
                        <button class=${val.status} onClick="endTask(${val.id})" ><i class="fa-solid fa-check"></i></button>
                    </div>
                </td>
                <td>${val?.added} </td>
                <td>${val?.completed} </td>

                <td>${val?.status} </td>
            </tr> `
        )
    })
    pendingList.innerHTML = list.map((val) => {
        if (val.status == "pending") {

            return (
                `<tr >        
                <td>${val?.title} </td>
                <td>${val?.desc}</td>
                
                <td>${val?.added} </td>
                
                </tr> `
            )
        }
    })
    completedList.innerHTML = list.map((val) => {
        if (val.status == "completed") {

            return (
                `<tr >        
                <td>${val?.title} </td>
                <td>${val?.desc}</td>
                
                <td>${val?.added} </td>
                <td>${val?.completed} </td>
                </tr> `
            )
        }
    })

}

const addTask = () => {
    if (!inputTitle.value || !inputDesc.value) {
        alert("Plz fill all details")
    }
    else {
        list = [...list, {
            id: list.length,
            title: inputTitle.value,
            desc: inputDesc.value,
            added: (new Date(Date.now())).toString().split("G")[0],
            completed: "--",
            status: "pending"
        }]
        changeList()
        inputTitle.value = ""
        inputDesc.value = ""
    }
}
const deleteTask = (id) => {
    console.log(id)
    list = list.filter((val) => val.id != id)
    changeList()
}
const endTask = (id) => {
    console.log(id)
    list = list.map((val) => {
        if (val.id == id) {
            val.status = "completed"
            val.completed = (new Date(Date.now())).toString().split("G")[0]
        }
        return val;
    })
    changeList()
}