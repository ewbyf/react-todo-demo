import '../styles/components/TodoList.css'

const TodoList = ({ list, setList }) => {
    const deleteItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }

    return (
        <>
            <p className="title">TODO LIST</p>
            {list.map((item, i) => (
                <div key={i} className="container" onClick={() => deleteItem(i)}>
                    {item}
                </div>
            ))
            }
        </>
    );
}
 
export default TodoList;