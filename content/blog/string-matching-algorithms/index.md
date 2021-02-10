---
title: String Matching Algorithms
category: Computer Science
date: "2021-02-11"
thumbnail: ./cover.jpg
description: Common and useful string matching algorithms. Comes along with LeetCode examples.
---

## Basic Concepts

Given a text *txt[0..n-1]* and a pattern *pat[0..m-1]*, write a function *search(char pat[], char txt[])* that prints all occurrences of *pat[]* in *txt[]*. You may assume that *n > m*.

**Examples:**

```
Input:  txt[] = "THIS IS A TEST TEXT"
        pat[] = "TEST"
Output: Pattern found at index 10

Input:  txt[] =  "AABAACAADAABAABA"
        pat[] =  "AABA"
Output: Pattern found at index 0
        Pattern found at index 9
        Pattern found at index 12
```

## Brute Force

### Implementation

```python
# Python3 program for Naive Pattern 
# Searching algorithm 
def search(pat, txt): 
    M = len(pat) 
    N = len(txt) 
  
    # A loop to slide pat[] one by one */ 
    for i in range(N - M + 1): 
        j = 0
          
        # For current index i, check  
        # for pattern match */ 
        while(j < M): 
            if (txt[i + j] != pat[j]): 
                break
            j += 1
  
        if (j == M):  
            print("Pattern found at index ", i) 
  
# Driver Code 
if __name__ == '__main__': 
    txt = "AABAACAADAABAAABAA"
    pat = "AABA"
    search(pat, txt) 
```

**Output**

```
Pattern found at index 0 
Pattern found at index 9 
Pattern found at index 13 
```

### Complexity

**What is the best case?**
The best case occurs when the first character of the pattern is not present in text at all.

```c
txt[] = "AABCCAADDEE"; pat[] = "FAA";
```

The number of comparisons in best case is O(n).

**What is the worst case ?**
The worst case of Naive Pattern Searching occurs in following scenarios.

1. When all characters of the text and pattern are same.

```c
txt[] = "AAAAAAAAAAAAAAAAAA"; pat[] = "AAAAA";
```

2. Worst case also occurs when only the last character is different.

```c
txt[] = "AAAAAAAAAAAAAAAAAB"; pat[] = "AAAAB";
```

The number of comparisons in the worst case is O(m*(n-m+1)). Although strings which have repeated characters are not likely to appear in English text, they may well occur in other applications (for example, in binary texts).

The KMP matching algorithm improves the worst case to O(n).

## KMP算法

### 背景

KMP算法一种改进的模式匹配算法，是D.E.Knuth、V.R.Pratt、J.H.Morris于1977年联合发表。

它的改进在于：每当从某个起始位置开始一趟比较后，在匹配过程中出现失配，不回溯i，而是利用已经得到的部分匹配结果，将一种假想的位置定位“指针”在模式上向右滑动尽可能远的一段距离到某个位置后，继续按规则进行下一次的比较。



## LeetCode例题

