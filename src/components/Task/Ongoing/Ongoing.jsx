import useTask from "../../../hooks/useTask";
import Loader from "../../Loader/Loader";
import TaskCard from "../TaskCard/TaskCard";


const Ongoing = () => {
    const [tasks, isLoading, refetch] = useTask();
    const ongoingTask = tasks?.data?.filter((task) => task.type === "ongoing");
    // console.log(todoTask);
  
    if (isLoading) return <Loader />;
    return (
      <div className="border p-4">
        <h1 className="text-3xl mb-4">Ongoing</h1>
        <div className="w-11/12 mx-auto flex flex-col gap-6">
          {ongoingTask?.map((task) => (
            <TaskCard key={task._id} task={task} refetch={refetch}/>
          ))}
        </div>
      </div>
    )
}
export default Ongoing;