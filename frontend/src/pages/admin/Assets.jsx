import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Filter,
  Download,
  Edit,
  Trash2,
  Eye,
  QrCode,
  Package,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

const Assets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample asset data
  const [assets] = useState([
    {
      id: 'AST-001',
      name: 'Dell XPS 13',
      type: 'Laptop',
      status: 'active',
      location: 'Office A',
      assignedTo: 'John Doe',
      purchaseDate: '2023-01-15',
      lastUpdated: '2024-12-10',
      value: '$1,200',
    },
    {
      id: 'AST-002',
      name: 'HP Monitor 27"',
      type: 'Monitor',
      status: 'active',
      location: 'Office B',
      assignedTo: 'Jane Smith',
      purchaseDate: '2023-03-20',
      lastUpdated: '2024-12-05',
      value: '$350',
    },
    {
      id: 'AST-003',
      name: 'Logitech Keyboard',
      type: 'Peripheral',
      status: 'repair',
      location: 'Warehouse',
      assignedTo: 'Unassigned',
      purchaseDate: '2023-05-10',
      lastUpdated: '2024-12-08',
      value: '$120',
    },
    {
      id: 'AST-004',
      name: 'Apple MacBook Pro',
      type: 'Laptop',
      status: 'active',
      location: 'Office C',
      assignedTo: 'Mike Johnson',
      purchaseDate: '2023-07-22',
      lastUpdated: '2024-12-12',
      value: '$2,500',
    },
    {
      id: 'AST-005',
      name: 'Standing Desk',
      type: 'Furniture',
      status: 'inactive',
      location: 'Storage',
      assignedTo: 'Unassigned',
      purchaseDate: '2022-11-05',
      lastUpdated: '2024-11-30',
      value: '$450',
    },
    {
      id: 'AST-006',
      name: 'Office Chair',
      type: 'Furniture',
      status: 'active',
      location: 'Office A',
      assignedTo: 'Sarah Williams',
      purchaseDate: '2023-02-14',
      lastUpdated: '2024-12-11',
      value: '$350',
    },
    {
      id: 'AST-007',
      name: 'Printer HP LaserJet',
      type: 'Equipment',
      status: 'active',
      location: 'Office B',
      assignedTo: 'Office Manager',
      purchaseDate: '2023-04-08',
      lastUpdated: '2024-12-09',
      value: '$800',
    },
    {
      id: 'AST-008',
      name: 'External SSD 1TB',
      type: 'Storage',
      status: 'active',
      location: 'Office C',
      assignedTo: 'Dev Team',
      purchaseDate: '2023-06-30',
      lastUpdated: '2024-12-12',
      value: '$150',
    },
  ]);

  // Filter and search
  let filteredAssets = assets.filter((asset) => {
    const matchesSearch =
      asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === 'all' || asset.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  // Sort
  filteredAssets.sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedAssets = filteredAssets.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        label: 'Active',
      },
      repair: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        label: 'Under Repair',
      },
      inactive: {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        label: 'Inactive',
      },
    };

    const config = statusConfig[status] || statusConfig.active;

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

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
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package size={32} className="text-blue-600" />
              </div>
              Assets
            </h1>
            <p className="text-gray-600 mt-2">Manage and track all your assets</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            <Plus size={20} />
            Add New Asset
          </motion.button>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-xl shadow-md p-6 mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by ID, name, type..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Filter Status */}
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                setCurrentPage(1);
              }}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="repair">Under Repair</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Export */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            <Download size={20} />
            Export
          </motion.button>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                {[
                  { key: 'id', label: 'Asset ID' },
                  { key: 'name', label: 'Asset Name' },
                  { key: 'type', label: 'Type' },
                  { key: 'status', label: 'Status' },
                  { key: 'location', label: 'Location' },
                  { key: 'assignedTo', label: 'Assigned To' },
                  { key: 'lastUpdated', label: 'Last Updated' },
                  { key: 'value', label: 'Value' },
                ].map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-2">
                      {col.label}
                      {sortConfig.key === col.key && (
                        <span>
                          {sortConfig.direction === 'asc' ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {paginatedAssets.map((asset, index) => (
                <motion.tr
                  key={asset.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {asset.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {asset.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {asset.type}
                  </td>
                  <td className="px-6 py-4 text-sm">{getStatusBadge(asset.status)}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {asset.location}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {asset.assignedTo}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {asset.lastUpdated}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {asset.value}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition"
                        title="View"
                      >
                        <Eye size={18} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition"
                        title="QR Code"
                      >
                        <QrCode size={18} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
            <span className="font-medium">{Math.min(endIndex, filteredAssets.length)}</span> of{' '}
            <span className="font-medium">{filteredAssets.length}</span> assets
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </motion.button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-lg font-medium transition ${
                      currentPage === page
                        ? 'bg-green-500 text-white'
                        : 'border border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </motion.button>
                )
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Assets;