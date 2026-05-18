import React from 'react';

interface ArchitectureDiagramProps {
  nodes: string[];
}

/**
 * Visual architecture diagram component
 * Renders system flow with boxes and connecting arrows
 */
export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes,
}) => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-lg p-8 border border-gray-200 overflow-x-auto">
      <div className="flex flex-col items-center gap-4 min-w-fit">
        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            {/* Node Box */}
            <div className="bg-white border-2 border-primary rounded-lg px-6 py-3 font-semibold text-gray-900 shadow-md hover:shadow-lg transition-shadow">
              {node}
            </div>

            {/* Arrow between nodes */}
            {index < nodes.length - 1 && (
              <div className="text-2xl text-primary">↓</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

/**
 * Parallel architecture diagram
 * Shows multiple branches (e.g., database write/read paths)
 */
export const ParallelArchitectureDiagram: React.FC<{
  title: string;
  left: string[];
  right: string[];
  commonBottom?: string;
}> = ({ title, left, right, commonBottom }) => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-lg p-8 border border-gray-200">
      <div className="flex flex-col items-center gap-6">
        {/* Top node */}
        <div className="bg-white border-2 border-primary rounded-lg px-6 py-3 font-semibold text-gray-900 shadow-md">
          {title}
        </div>

        <div className="text-2xl text-primary">↓</div>

        {/* Split into left and right */}
        <div className="flex gap-12 items-start">
          {/* Left branch */}
          <div className="flex flex-col items-center gap-4">
            {left.map((node, idx) => (
              <React.Fragment key={`left-${idx}`}>
                <div className="bg-blue-50 border-2 border-blue-500 rounded-lg px-5 py-2 font-semibold text-gray-900">
                  {node}
                </div>
                {idx < left.length - 1 && (
                  <div className="text-2xl text-blue-500">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Right branch */}
          <div className="flex flex-col items-center gap-4">
            {right.map((node, idx) => (
              <React.Fragment key={`right-${idx}`}>
                <div className="bg-green-50 border-2 border-green-500 rounded-lg px-5 py-2 font-semibold text-gray-900">
                  {node}
                </div>
                {idx < right.length - 1 && (
                  <div className="text-2xl text-green-500">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Converge at bottom */}
        {commonBottom && (
          <>
            <div className="flex gap-12 justify-center w-full">
              <div className="text-2xl text-blue-500">↙</div>
              <div className="text-2xl text-green-500">↘</div>
            </div>
            <div className="bg-white border-2 border-primary rounded-lg px-6 py-3 font-semibold text-gray-900 shadow-md">
              {commonBottom}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
