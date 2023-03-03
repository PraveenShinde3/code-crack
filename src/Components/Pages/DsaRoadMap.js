import React from "react";
import { motion as m, easeOut } from "framer-motion";

const DsaRoadMap = () => {
  let programmingSkills = [
    "Variables",
    "Data Types",
    "Operators",
    "Loops",
    "Conditionals",
    "Function",
  ];
  let programmingLanguages = ["Python", "Java", "C++"];
  let basicDs = ["Arrays", "Linked List", "Stacks", "Queues", "Hash Tables"];
  let basicAlgo = [
    "Sorting (bubble sort, insertion sort, selection sort)",
    "Searching (linear search, binary search)",
    "Traversal (depth-first search, breadth-first search)",
  ];

  let trees = [
    "Binary trees",
    "Binary Search Trees",
    "AVL Trees",
    "Red-Black Trees",
  ];
  let graphs = ["DFS", "BFS"];
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="py-20 px-10"
    >
      <div className="container mx-auto ">
        <div class="p-5 mb-4 border-3 border-black bg-gray-50 ">
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Choose a programming language
          </p>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <div class="text-gray-600 dark:text-gray-400">
                <div class="text-base font-normal">
                  The first step is to choose a programming language that you
                  want to use to learn data structures and algorithms. Popular
                  choices include following.
                  <ol>
                    {programmingLanguages.map((skills) => (
                      <li className="flex items-center">
                        <svg
                          class="w-4 h-4 mr-1.5 text-black flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        {skills}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div class="p-5 mb-4 border-3 border-black bg-gray-50 ">
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Programming basics
          </p>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <div class="text-gray-600 dark:text-gray-400">
                <div class="text-base font-normal">
                  Before diving into data structures and algorithms, it's
                  essential to understand programming basics such as
                  <ol>
                    {programmingSkills.map((skills) => (
                      <li className="flex items-center">
                        <svg
                          class="w-4 h-4 mr-1.5 text-black flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        {skills}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div class="p-5 mb-4 border-3 border-black bg-gray-50 ">
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Understand Big O notation
          </p>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <div class="text-gray-600 dark:text-gray-400">
                <div class="text-base font-normal">
                  Before diving into data structures and algorithms, it's
                  important to understand Big O notation. This notation is used
                  to describe the time complexity of algorithms and helps you
                  compare the efficiency of different algorithms
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div class="p-5 mb-4 border-3 border-black bg-gray-50 ">
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Basic data structures
          </p>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <div class="text-gray-600 dark:text-gray-400">
                <div class="text-base font-normal">
                  Start by learning about basic data structures such as
                </div>
                <ol>
                  {basicDs.map((skills) => (
                    <li className="flex items-center">
                      <svg
                        class="w-4 h-4 mr-1.5 text-black flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {skills}
                    </li>
                  ))}
                </ol>
                <br></br>
                <div>
                  Understand how to implement these data structures in code and
                  how to perform basic operations such as insertion, deletion,
                  and traversal.
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div class="p-5 mb-4 border-3 border-black bg-gray-50 ">
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Basic Algorithms
          </p>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <div class="text-gray-600 dark:text-gray-400">
                <div class="text-base font-normal">
                  After understanding data structures, learn about basic
                  algorithms such as..
                </div>
                <ol>
                  {basicAlgo.map((skills) => (
                    <li className="flex items-center">
                      <svg
                        class="w-4 h-4 mr-1.5 text-black flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {skills}
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          </ol>
        </div>
        <div class="p-5 mb-4 border-3 border-black bg-gray-50 ">
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Recursion
          </p>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <div class="text-gray-600 dark:text-gray-400">
                <div class="text-base font-normal">
                  Recursion is a fundamental concept in computer science and is
                  used in many algorithms. Learn how to write recursive
                  functions and understand their performance implications.
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div class="p-5 mb-4 border-3 border-black bg-gray-50 ">
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Trees
          </p>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <div class="text-gray-600 dark:text-gray-400">
                <div class="text-base font-normal">
                  Trees are a fundamental data structure with many applications.
                </div>
                <ol>
                  {trees.map((skills) => (
                    <li className="flex items-center">
                      <svg
                        class="w-4 h-4 mr-1.5 text-black flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {skills}
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          </ol>
        </div>
        <div class="p-5 mb-4 border-3 border-black bg-gray-50 ">
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Graphs
          </p>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <div class="text-gray-600 dark:text-gray-400">
                <ol>
                  {graphs.map((skills) => (
                    <li className="flex items-center">
                      <svg
                        class="w-4 h-4 mr-1.5 text-black flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {skills}
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </m.div>
  );
};

export default DsaRoadMap;
