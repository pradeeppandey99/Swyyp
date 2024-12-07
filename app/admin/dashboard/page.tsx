'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PlusCircle, Search, SortAsc, Bell, Trash2 } from 'lucide-react'

const formTypes = ['Quiz', 'Survey', 'Live Poll', 'Feedback']

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('prepared')

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-emerald-600">
                  Swyyp
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <button
                    className={`px-4 py-2 rounded-md ${
                      activeTab === 'prepared'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab('prepared')}
                  >
                    Prepared Forms
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      activeTab === 'trash'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab('trash')}
                  >
                    Trash
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search forms..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <button className="p-2 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                    <SortAsc className="h-5 w-5" />
                  </button>
                  <button className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 flex items-center">
                    <PlusCircle className="h-5 w-5 mr-2" />
                    Create New
                  </button>
                </div>
              </div>

              {activeTab === 'prepared' && (
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {formTypes.map((type, index) => (
                      <li key={index}>
                        <Link href="#" className="block hover:bg-gray-50">
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-emerald-600 truncate">{type} Form</p>
                              <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Active
                                </p>
                              </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                              <div className="sm:flex">
                                <p className="flex items-center text-sm text-gray-500">
                                  Created on May 1, 2023
                                </p>
                              </div>
                              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <p>100 Responses</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'trash' && (
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    <li>
                      <div className="px-4 py-4 sm:px-6">
                        <p className="text-sm text-gray-500">No items in trash</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

