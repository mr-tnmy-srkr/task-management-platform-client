import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const TaskCard = ({ task, refetch }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    // console.log(task._id);
    const { data } = await axios.delete(
      `https://task-management-platform-server-sable.vercel.app/delete-tasks/${task._id}`
    );
    // console.log(data);
    if (data.deletedCount > 0) {
      toast.success("Task deleted successfully");
      refetch();
    }
  };

  const handleChangeType = async (newType) => {
    const { data } = await axios.patch(
      `https://task-management-platform-server-sable.vercel.app/task-type-update/${task._id}`,
      { type: newType }
    );
    // console.log(data);
    if (data.modifiedCount > 0) {
      toast.success("Task status updated successfully");
      refetch();
    }
  };

  return (
    <div className="card  bg-primary text-primary-content ">
      <div className="card-body text-start">
        <h2 className="card-title">Title:{task.title}</h2>
        <p>Description : {task.task}</p>
        <p>Deadline : {task.deadline}</p>
        <p>Priority : {task.category}</p>
        <p>Action type : {task.type}</p>
        <div className="card-actions justify-center">
          {task.type === "todo" && (
            <>
              <button
                onClick={() => handleChangeType("ongoing")}
                className="btn"
              >
                Mark as ongoing
              </button>
              <button
                onClick={() => handleChangeType("completed")}
                className="btn"
              >
                Mark as completed
              </button>
            </>
          )}
          {task.type === "ongoing" && (
            <>
              <button onClick={() => handleChangeType("todo")} className="btn">
                Mark as todo
              </button>
              <button
                onClick={() => handleChangeType("completed")}
                className="btn"
              >
                Mark as completed
              </button>
            </>
          )}
          {task.type === "completed" && (
            <>
              <button onClick={() => handleChangeType("todo")} className="btn">
                Mark as todo
              </button>
              <button
                onClick={() => handleChangeType("ongoing")}
                className="btn"
              >
                Mark as ongoing
              </button>
            </>
          )}
          <div className="card-actions justify-end">
            <Link to={`/dashboard/update-task/${task._id}`}>
              <button className="btn">Update</button>
            </Link>
            <button onClick={handleDelete} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
