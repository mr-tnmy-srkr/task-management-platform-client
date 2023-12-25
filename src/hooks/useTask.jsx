import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useTask = () => {
  const { user, loading } = useAuth();
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["tasks"],
    queryFn: async () =>
      await axios(
        `https://task-management-platform-server-sable.vercel.app/get-tasks/${user.email}`
      ),
  });
  return [tasks, isLoading, refetch];
};
export default useTask;
