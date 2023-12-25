import useTask from "../../../hooks/useTask";
import Loader from "../../Loader/Loader";
import TaskCard from "../TaskCard/TaskCard";


const Completed = () => {
    const [tasks, isLoading, refetch] = useTask();
    const completedTask = tasks?.data?.filter((task) => task.type === "completed");
    // console.log(todoTask);
  
    if (isLoading) return <Loader />;
    return (
      <div className="border p-4">
        <h1 className="text-3xl mb-4">Completed</h1>
        <div className="w-11/12 mx-auto flex flex-col gap-6">
          {completedTask?.map((task) => (
            <TaskCard key={task._id} task={task} refetch={refetch}/>
          ))}
        </div>
      </div>
    )  
}
export default Completed;