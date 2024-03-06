export type Person = {
    isActive: boolean;
    'Problem Number': string;
    'Problem Name': string;
    'Type': string;
    'Concepts': string;
    'Status': number;
    'Last Solved': string;
    'How to Solve': string;
    'Solution': string;
    'link': string;
  };
  

  export type RawData = {
    range: string;
    majorDimension: string;
    values: any[][];
    // Add other properties if necessary
  };

  export const data:Person[] = [
    {
        'isActive':true,
        'Problem Number':'34',
        'Problem Name':'Permutations in Strings',
        'Type':'Medium',
        'Concepts':'Hash Map, 2-pointer, Sliding Window',
        'Status':1,
        'Last Solved':'12/18/2023',
        'How to Solve':'Arrange 2 pointers and check for each instance wheather the charecter in in the finding substring',
        'Solution':'dcd',
        'link':'https://leetcode.com/problems/permutation-in-string/description/'
    },
    {
        'isActive':true,
        'Problem Number':'34',
        'Problem Name':'Permutations in Strings',
        'Type':'Medium',
        'Concepts':'2-pointer, Sliding Window',
        'Status':1,
        'Last Solved':'12/18/2023',
        'How to Solve':'Arrange 2 pointers and check for each instance wheather the charecter in in the finding substring',
        'Solution':'dcd',
        'link':'https://leetcode.com/problems/permutation-in-string/description/'
    },
    {
      'isActive':true,
      'Problem Number':'34',
      'Problem Name':'Permutations in Strings',
      'Type':'Medium',
      'Concepts':'2-pointer, Sliding Window',
      'Status':1,
      'Last Solved':'12/18/2023',
      'How to Solve':'Arrange 2 pointers and check for each instance wheather the charecter in in the finding substring',
      'Solution':'dcd',
      'link':'https://leetcode.com/problems/permutation-in-string/description/'
  },
  {
    'isActive':true,
    'Problem Number':'34',
    'Problem Name':'Permutations in Strings',
    'Type':'Medium',
    'Concepts':'2-pointer, Sliding Window',
    'Status':1,
    'Last Solved':'12/18/2023',
    'How to Solve':'Arrange 2 pointers and check for each instance wheather the charecter in in the finding substring',
    'Solution':'dcd',
    'link':'https://leetcode.com/problems/permutation-in-string/description/'
},
  ];
  