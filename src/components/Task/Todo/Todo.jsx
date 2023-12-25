import Loader from "../../Loader/Loader";
import useTask from "../../../hooks/useTask";
import TaskCard from "../TaskCard/TaskCard";

const Todo = () => {
  const [tasks, isLoading, refetch] = useTask();
  const todoTask = tasks?.data?.filter((task) => task.type === "todo");
  // console.log(todoTask);

  if (isLoading) return <Loader />;
  return (
    <div className="border p-4">
      <h1 className="text-3xl mb-4">ToDo</h1>
      <div className="w-11/12 mx-auto flex flex-col gap-6">
        {todoTask?.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch}/>
        ))}
      </div>
    </div>
  );
};
export default Todo;
