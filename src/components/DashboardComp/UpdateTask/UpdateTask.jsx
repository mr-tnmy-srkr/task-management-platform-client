import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateTask = () => {
  const { data } = useLoaderData();
  // console.log(data);
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const updatedTasks = {
      title: data.title,
      task: data.task,
      category: data.category,
      type: data.type,
      deadline: data.deadline,
    };

    try {
      const response = await axios.put(
        `https://task-management-platform-server-sable.vercel.app/update-task/${id}`,
        updatedTasks
      );
      if (response.data.modifiedCount) {
        console.log(response);
        toast.success("Task updated successfully");
        navigate("/dashboard/manage-task");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl">--Update a Task--</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto ">
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Task Title</span>
          </label>
          <input
            defaultValue={data.title}
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
            defaultValue={data.task}
            {...register("task", { required: true })}
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
              defaultValue={data.category}
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <select
              defaultValue={data.type}
              {...register("type", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="">Select Type</option>
              <option value="todo">ToDo</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              defaultValue={data.deadline}
              type="date"
              placeholder="deadline"
              min={new Date().toISOString().split("T")[0]}
              {...register("deadline", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Update Task</button>
        </div>
      </form>
    </div>
  );
};
export default UpdateTask;
