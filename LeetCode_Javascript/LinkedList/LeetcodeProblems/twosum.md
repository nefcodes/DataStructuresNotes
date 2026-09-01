# Two Sum — Ways to Solve It

Problem: given an array of numbers and a target, return the indices of the two numbers that add up to the target.

## 1. Brute force (nested loops)

Check every pair.

```javascript
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
```

- Time: O(n²)
- Space: O(1)
- This is your original approach (with a minor tweak: `j` starts at `i + 1` so you don't recheck pairs or need the `i == j` guard).

## 2. Sort + two pointers

Sort the array (keeping track of original indices), then move pointers from both ends toward the middle.

```javascript
var twoSum = function(nums, target) {
    const indexed = nums.map((num, i) => [num, i]);
    indexed.sort((a, b) => a[0] - b[0]);

    let left = 0, right = indexed.length - 1;
    while (left < right) {
        const sum = indexed[left][0] + indexed[right][0];
        if (sum === target) {
            return [indexed[left][1], indexed[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};
```

- Time: O(n log n) — dominated by the sort
- Space: O(n) for the indexed copy
- Useful pattern for sorted-array problems generally, but overkill here since hash map is faster.

## 3. Hash map, one pass (optimal)

For each number, check if its complement (`target - num`) was already seen.

```javascript
var twoSum = function(nums, target) {
    const seen = new Map(); // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
};
```

- Time: O(n) — single pass
- Space: O(n) for the map
- This is the standard optimal solution.

## 4. Hash map, two pass (variant)

Build the map first, then scan for complements. Slightly less efficient than one-pass (two loops instead of one) but sometimes easier to reason about.

```javascript
var twoSum = function(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        seen.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement) && seen.get(complement) !== i) {
            return [i, seen.get(complement)];
        }
    }
};
```

- Time: O(n)
- Space: O(n)

## Comparison

| Approach | Time | Space | Notes |
|---|---|---|---|
| Brute force | O(n²) | O(1) | Simple, slow on large input |
| Sort + two pointers | O(n log n) | O(n) | Good general pattern, not optimal here |
| Hash map (one pass) | O(n) | O(n) | Best — standard solution |
| Hash map (two pass) | O(n) | O(n) | Same complexity, one pass is cleaner |

**Best choice:** one-pass hash map — optimal time complexity with a single traversal.