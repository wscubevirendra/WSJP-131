// app/admin/page.jsx
'use client';

import { useState } from 'react';
import { 
  ShoppingBag, Users, Package, TrendingUp, 
  Eye, ShoppingCart, Star, Clock, 
  ChevronRight, Download, Filter, 
  MoreVertical, CreditCard, Truck,
  ArrowUp, ArrowDown, DollarSign
} from 'lucide-react';

export default function AdminDashboard() {
  const [period, setPeriod] = useState('today');

  // Stats Data
  const stats = [
    { 
      title: 'Total Revenue', 
      value: '$48,295', 
      change: '+12.5%', 
      icon: DollarSign, 
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      trend: 'up'
    },
    { 
      title: 'Total Orders', 
      value: '1,284', 
      change: '+8.2%', 
      icon: ShoppingBag, 
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      trend: 'up'
    },
    { 
      title: 'Total Customers', 
      value: '5,643', 
      change: '+23.1%', 
      icon: Users, 
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      trend: 'up'
    },
    { 
      title: 'Products', 
      value: '847', 
      change: '-2.4%', 
      icon: Package, 
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      trend: 'down'
    },
  ];

  // Recent Orders
  const recentOrders = [
    { id: '#ORD-001', customer: 'Sarah Johnson', amount: '$245.00', status: 'Delivered', date: '2 hours ago', items: 3 },
    { id: '#ORD-002', customer: 'Michael Chen', amount: '$189.50', status: 'Processing', date: '4 hours ago', items: 2 },
    { id: '#ORD-003', customer: 'Emily Davis', amount: '$432.00', status: 'Shipped', date: '6 hours ago', items: 5 },
    { id: '#ORD-004', customer: 'James Wilson', amount: '$167.80', status: 'Pending', date: '8 hours ago', items: 1 },
    { id: '#ORD-005', customer: 'Maria Garcia', amount: '$523.00', status: 'Delivered', date: '12 hours ago', items: 4 },
  ];

  // Top Products
  const topProducts = [
    { name: 'Wireless Headphones', sales: 342, revenue: '$10,260', image: '🎧' },
    { name: 'Smart Watch Pro', sales: 289, revenue: '$11,560', image: '⌚' },
    { name: 'Laptop Backpack', sales: 245, revenue: '$7,350', image: '🎒' },
    { name: 'USB-C Hub', sales: 198, revenue: '$3,960', image: '🔌' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Delivered': 'bg-emerald-100 text-emerald-700',
      'Processing': 'bg-blue-100 text-blue-700',
      'Shipped': 'bg-purple-100 text-purple-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back! Here's what's happening with your store.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white rounded-lg border border-gray-200 p-1">
            {['today', 'week', 'month'].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                  period === p 
                    ? 'bg-teal-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span className={`text-sm font-medium flex items-center gap-1 ${
                stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
            <button className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Simple bar chart representation */}
          <div className="h-64 flex items-end gap-2">
            {[42, 68, 55, 87, 72, 94, 65, 88, 76, 95, 82, 60].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-teal-500 rounded-t-lg hover:bg-teal-600 transition-all duration-300"
                  style={{ height: `${height * 0.6}%` }}
                />
                <span className="text-xs text-gray-500">{['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
            <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {product.image}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{product.sales} sales</span>
                    <span>{product.revenue}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">4.8</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Filter className="w-4 h-4 text-gray-500" />
                </button>
                <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                  View All
                </button>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {recentOrders.map((order) => (
              <div key={order.id} className="p-4 hover:bg-gray-50 transition flex items-center justify-between">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900">{order.id}</p>
                    <p className="text-xs text-gray-500">{order.customer} • {order.items} items</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-900">{order.amount}</span>
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <span className="text-xs text-gray-400 hidden sm:block">{order.date}</span>
                  <button className="p-1 hover:bg-gray-100 rounded-lg transition">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-xl text-white">
            <h3 className="font-semibold text-lg">Quick Actions</h3>
            <p className="text-teal-100 text-sm mt-1">Manage your store efficiently</p>
            <div className="mt-4 space-y-2">
              <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2.5 text-sm font-medium transition flex items-center gap-3">
                <Plus className="w-4 h-4" />
                Add New Product
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2.5 text-sm font-medium transition flex items-center gap-3">
                <Truck className="w-4 h-4" />
                Process Orders
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2.5 text-sm font-medium transition flex items-center gap-3">
                <CreditCard className="w-4 h-4" />
                Manage Payments
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900">Store Performance</h3>
            <div className="mt-3 space-y-3">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Conversion Rate</span>
                  <span className="font-medium text-gray-900">3.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: '38%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Customer Satisfaction</span>
                  <span className="font-medium text-gray-900">4.7/5</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add Plus icon since it's used
const Plus = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
  </svg>
);