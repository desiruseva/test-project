import React from "react";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import Title from "../components/Title";
import Button from "../components/Button";
import Tabs from "../components/Tabs.js";
import TaskTitle from "../components/TaskTitle.js";
import BoardView from "../components/BoardView.js";
import { tasks } from "../assets/data";
import Table from "../components/task/Table";
import AddTask from "../components/task/AddTask.js";
import Layout from "../Layout/Layout.js";

const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];

const TASK_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};

const Tasks = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/addtask');
  };

  const params = useParams();
  const status = params?.status || "";

  return (
    <Layout>
      <div className="w-full">
      <div className="flex items-center justify-between mb-4 mt-10">
        <Title title={status ? `${status} Tasks` : "Tasks"} />
        {!status && (
          <Button
            onClick={handleClick}
            label="Create Task"
            icon={<IoMdAdd className="text-lg" />}
            className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"
          />
        )}
      </div>

      <Tabs tabs={TABS}>
        {!status && (
          <div className="w-full flex justify-between gap-4 md:gap-x-12 py-4">
            <TaskTitle label="To Do" className={TASK_TYPE.todo} />
            <TaskTitle label="In Progress" className={TASK_TYPE["in progress"]} />
            <TaskTitle label="Completed" className={TASK_TYPE.completed} />
          </div>
        )}

        <div className="w-full">
          {/* <BoardView tasks={tasks} /> */}
          <Table tasks={tasks} />
        </div>
      </Tabs>

      {/* <AddTask /> */}
    </div>
    </Layout>
    
  );
};

export default Tasks;
