function TodoCard({userId, title, completed}){
    return(
        <div
           style={{
               border: "1px solid #ccc",
               padding: "10px",
               marginBottom: "8px",
               borderRadius: "6px",
               boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
               border: "none"
           }}
        >
            <p><strong>User ID: </strong> {userId}</p>
            <p><strong>Title: </strong> {title}</p>
            <p>
                <strong>Status:</strong>{" "}
                {completed ? "Completed ✅" : "Pending❌"}
            </p>
        </div>
    );
}

export default TodoCard;