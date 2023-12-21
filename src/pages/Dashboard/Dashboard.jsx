import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-center text-3xl mb-8">Welcome to Task Management Portal</h1>
     
    </div>
  );
};
export default Dashboard;
