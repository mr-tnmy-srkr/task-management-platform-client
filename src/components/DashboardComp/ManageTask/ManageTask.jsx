import Completed from "../../Task/Completed/Completed";
import Ongoing from "../../Task/Ongoing/Ongoing";
import Todo from "../../Task/Todo/Todo";

const ManageTask = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl">--Manage Task--</h1>

      <div className="my-8 grid lg:grid-cols-3 gap-10 w-11/12 mx-auto  text-center  min-h-[100vh] overflow-x-auto">
        <Todo />
        <Ongoing/>
        <Completed/>
      </div>
    </div>
  );
};
export default ManageTask;
