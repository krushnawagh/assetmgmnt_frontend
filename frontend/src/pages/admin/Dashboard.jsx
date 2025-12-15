import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Package,
  CheckCircle,
  Wrench,
  Users,
  TrendingUp,
  Plus,
  List,
  RefreshCw,
  Upload,
  Activity,
  BarChart3,
  PieChart,
} from "lucide-react";

const Dashboard = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const stats = [
    {
      title: "Total Assets",
      value: "1,250",
      icon: Package,
      color: "from-blue-500 to-blue-600",
      lightColor: "bg-blue-100",
      textColor: "text-blue-600",
      baseline: "+12% from last month",
    },
    {
      title: "Active Assets",
      value: "1,100",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
      lightColor: "bg-green-100",
      textColor: "text-green-600",
      baseline: "+12% from last month",
    },
    {
      title: "Under Repair",
      value: "80",
      icon: Wrench,
      color: "from-yellow-500 to-yellow-600",
      lightColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      baseline: "-30% from last month",
    },
    {
      title: "Assigned",
      value: "870",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      lightColor: "bg-purple-100",
      textColor: "text-purple-600",
      baseline: "+12% from last month",
    },
  ];

  const quickActions = [
    {
      label: "Add New Asset",
      icon: Plus,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      label: "View All Assets",
      icon: List,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      label: "Manage Repairs",
      icon: Wrench,
      color: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      label: "Bulk Import",
      icon: Upload,
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  const activities = [
    {
      user: "John Doe",
      action: "assigned",
      asset: "Laptop #1234",
      target: "Jane Smith",
      time: "2 hours ago",
      type: "assignment",
    },
    {
      user: "Asset #5678",
      action: "marked as",
      asset: "under repair",
      target: "",
      time: "5 hours ago",
      type: "repair",
    },
    {
      user: "System",
      action: "added new asset",
      asset: "Monitor #9101",
      target: "inventory",
      time: "1 day ago",
      type: "addition",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2 flex items-center gap-2">
          <Activity size={18} className="text-green-500" />
          Welcome back! Here's what's happening with your assets.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
            >
              <div className={`bg-gradient-to-r ${stat.color} h-2`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.lightColor} p-3 rounded-lg`}>
                    <Icon size={24} className={stat.textColor} />
                  </div>
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <TrendingUp size={16} className="mr-1" />
                  {stat.baseline}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Recent Activities */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="col-span-2 bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Activity size={24} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Recent Activities
            </h2>
          </div>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-transparent rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {activity.user.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 text-sm">
                    <span className="font-semibold">{activity.user}</span>{" "}
                    <span className="text-gray-600">{activity.action}</span>{" "}
                    <span className="font-semibold text-blue-600">
                      {activity.asset}
                    </span>
                    {activity.target && (
                      <>
                        {" "}
                        <span className="text-gray-600">to</span>{" "}
                        <span className="font-semibold text-green-600">
                          {activity.target}
                        </span>
                      </>
                    )}
                    .
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="mt-4 pt-4 border-t border-gray-200"
          >
            <Link to="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2">
              View all activities
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <BarChart3 size={24} className="text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Today's Stats</h2>
          </div>

          <div className="space-y-4">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg"
            >
              <span className="text-gray-700 text-sm font-medium">
                Added Today
              </span>
              <span className="font-bold text-green-600 text-lg">10</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-transparent rounded-lg"
            >
              <span className="text-gray-700 text-sm font-medium">
                Pending Assignments
              </span>
              <span className="font-bold text-orange-600 text-lg">10</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg"
            >
              <span className="text-gray-700 text-sm font-medium">
                QR Codes Generated
              </span>
              <span className="font-bold text-blue-600 text-lg">10</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <RefreshCw size={24} className="text-green-600" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${action.color} text-white py-4 rounded-lg shadow-md transition flex items-center justify-center gap-2 font-medium group`}
              >
                <Icon size={20} className="group-hover:rotate-12 transition" />
                <span className="text-sm">{action.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Charts Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7 }}
        className="grid grid-cols-2 gap-6"
      >
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <BarChart3 size={24} className="text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Asset Status Distribution
            </h3>
          </div>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg text-gray-400">
            <div className="text-center">
              <BarChart3 size={48} className="mx-auto mb-2 text-gray-300" />
              <p className="text-sm">Chart Component</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <PieChart size={24} className="text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Top Asset Categories
            </h3>
          </div>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg text-gray-400">
            <div className="text-center">
              <PieChart size={48} className="mx-auto mb-2 text-gray-300" />
              <p className="text-sm">Chart Component</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
