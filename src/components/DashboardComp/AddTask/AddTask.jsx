import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const AddTask = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post("http://localhost:5000/tasks", {
        title: data.title,
        task: data.task,
        category: data.category,
        deadline: data.deadline,
        email: user.email,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl">--Add a Task--</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto ">
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Task Title</span>
          </label>
          <input
            type="text"
            placeholder="Task Title"
            {...register("title", { required: true })}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Details</span>
          </label>
          <textarea
            {...register("task")}
            className="textarea textarea-bordered h-24"
            placeholder="Details"
          ></textarea>
        </div>

        <div className="flex gap-6">
          {/* category */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select Priority
              </option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              placeholder="deadline"
              min={new Date().toISOString().split("T")[0]}
              {...register("deadline", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
