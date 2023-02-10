import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { memo, useEffect } from "react";

import "../Accordion/Accordion.css";

const Accordion = (props) => {
  let count = 0;

  props.data.map((item) => {
    if (item.status) {
      return count++;
    } else {
      return count;
    }
  });

  useEffect(() => {
    // console.log(props.data);
  }, [props.data]);
  // console.log(props.data);
  return (
    <div className="container mx-auto">
      {props.data[0] ? (
        <details>
          <summary
            className="flex justify-between"
            style={{
              backgroundColor:
                count === props.data.length ? "#59CE8F" : "white",
            }}
          >
            <p>{props.data[0].topic}</p>
            <p>
              {count}/{props.data.length}
            </p>
          </summary>
          <div className="overflow-auto">
            <table className="w-full text-sm text-left dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Problem
                  </th>
                  <th scope="col" className="px-6 py-3 w-4">
                    Difficulty
                  </th>
                  <th scope="col" className="px-6 py-3 w-4">
                    Leetcode
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((item) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item.id}
                  >
                    <td className="px-6 py-4 w-4">
                      <input
                        type="checkbox"
                        name=""
                        id="status-check"
                        className="accent-black"
                        defaultChecked={item.status}
                        onClick={() =>
                          props.updateStatus(!item.status, item.id)
                        }
                      />
                    </td>
                    <td className="px-6 py-4">{item.problem}</td>
                    <td className="px-6 py-4 ">{item.difficulty}</td>
                    <td className="px-6 py-4 flex gap-2 ">
                      <a
                        href={item.links.leetcode}
                        rel="noopener noreferrer"
                        className="text-2xl"
                        target="_blank"
                      >
                        <SiLeetcode />
                      </a>
                      {item.links.geeksForGeeks.length ? (
                        <a
                          href={item.links.geeksForGeeks}
                          rel="noopener noreferrer"
                          className="text-2xl"
                          target="_blank"
                        >
                          <SiGeeksforgeeks />
                        </a>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      ) : null}
    </div>
  );
};

export default memo(Accordion);
