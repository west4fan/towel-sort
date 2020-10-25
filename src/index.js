
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ( !Array.isArray(matrix) || (matrix.length == 0) ) return ([]);
  let sortedMatrix = [];

    matrix.forEach((subMatrix, index) => { 
      if (index % 2 !== 0) { sortedMatrix = sortedMatrix.concat( subMatrix.reverse() ); }
      else { sortedMatrix = sortedMatrix.concat(subMatrix); }
    });

  return sortedMatrix;
}
