import { useState } from "react";


const One = () => {
    const [name, setName] = useState("");
    const [taskName, setTaskName] = useState("");
    const [task, setTask] = useState([]);
    const [description, setDescription] = useState("");
    const [list, setList] = useState([
        {
            name: "History",
            description: "Abc",
            task: ["Daily 2 hr"]
        },
        {
            name: "Science",
            description: "xyz",
            task: ["Daily 4 hr"]
        }
    ]);
    const [showAgenda, setShowAgenda] = useState(false);

    const handleAddTaskName = () => {
        if (!taskName.trim()) {
            return;
        }
        setTask([...task, taskName]);
        setTaskName("");
    }

    const stateAgenda = () => {
        setShowAgenda(!showAgenda)
    }

    const AddList = () => {
        if (!name.trim() || !description.trim() || !task.length === 0) {
            return;
        }
        setList([...list, { name, description, task }])
    }

    return (
        <>
            <div style={{ display: "flex", justifyItems: "center", gap: 10 }}>
                <label htmlFor="Name">Name:</label>
                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div style={{ display: "flex", justifyItems: "center", gap: 10, marginTop: "20px" }}>
                <label htmlFor="Description">Description:</label>
                <input
                    type="text"
                    placeholder="Enter the description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div style={{ display: "flex", justifyItems: "center", gap: 10, marginTop: "20px" }}>
                <label htmlFor="Task">Task:</label>
                <input
                    type="text"
                    placeholder="Enter the Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </div>
            <div style={{ display: "flex", justifyItems: "center", gap: 10 }}>
                <button style={{ marginTop: "20px" }} onClick={handleAddTaskName}>Add Task</button>
                <button style={{ marginTop: "20px" }}>Submit</button>
                <button onClick={AddList} disabled={!name.trim() || !description.trim() || task.length === 0} style={{ marginTop: "20px" }}>Show List</button>
            </div>
            {list.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((t, index) => (
                            <tr key={index}>
                                <td>{t.name}</td>
                                <td>{t.description}</td>
                                <ul>
                                    {t.task.map((t1, k) => (
                                        <li key={k}>{t1}</li>
                                    ))}
                                </ul>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default One;