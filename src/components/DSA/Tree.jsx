import React from 'react';
import { NavLink } from 'react-router-dom';

function Tree() {
  return (
    <div className="mx-auto w-full max-w-7xl mt-6 mb-6 ">
      <div  className="text-5xl font-extrabold text-center mb-12 text-gray-900 bg-gradient-to-r from-pink-500 to-red-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-300 cursor-pointer sm:flex sm:items-center sm:justify-center sm:gap-4">
        <span className="text-gray-100 sm:text-center hidden sm:block text-3xl">
          Tree (Binary Tree, Binary Search Tree And AVL)
        </span>
      </div>


      {/* Single Column Layout */}
      <div className="space-y-6">
        {/* Unique Gradient Cards with Hover Effects */}
        <NavLink to="/tree1">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              BFS And DFS (Tree) Notes with Questions
            </span>
          </div>
        </NavLink>

        <NavLink to="/tree2">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Binary Tree And Binary Search Tree Notes
            </span>
          </div>
        </NavLink>

        <NavLink to="/tree3">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              AVL Tree Notes with Questions
            </span>
          </div>
        </NavLink>

        <NavLink to="/tree4">
          <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Most Asked Leetcode Questions (Tree)
            </span>
          </div>
        </NavLink>

        <NavLink to="/tree5">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Hard Questions Asked in Maang Companies
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Tree;