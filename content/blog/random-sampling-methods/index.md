---
title: Random Sampling Methods
category: Statistics
date: "2021-02-06"
thumbnail: ./cover.jpg
description: How we get a sample from a random distribution. From LCG to Gibbs sampling.
---

## Background

> _He sat_, _continuing to look down the nave_, when suddenly the solution to the problem just seemed to present itself. It was so simple, so obvious he just started to laugh...
>
> --P.C. Doherty, _Satan in St Mary's_

This post is a brief introduction to various methods of sampling from any given probability distribution. References include textbook and online introductions on Monte Carlo Statistical Methods and Statistical Computing.

## Recap

### LCG

$$
x_n=(ax_{n-1}+c)(mod\ M),\ n=1,2,...\\
R_n=\frac{x_n}{M}
$$

Then we have

$$
R_n\sim U(0,1),\ R_n\in[0,1)
$$

### Inverse Transformation

Let $X$ be a continuous random variable, in range $(a,b)$, p.d.f. of $X$ is positive on $(a,b)$, denote c.d.f. of $X$ as $F(X)$ , $U\sim U(0,1)$. Then $Y=F^{-1}(U)\sim F(\cdot)$.

### Box-Muller Algorithm

Let random variable i.i.d. $U(0,1)$, then

$$
X_1=\sqrt{-2logU_1}cos(2\pi U_2)\\
X_2=\sqrt{-2logU_1}sin(2\pi U_2)
$$

i.i.d $N(0,1)$.

### Accept-Reject Method

1. Generate $X\sim g(x)$,$U\sim U(0,1)$
2. Accept $Y=X$, if $U\leq \frac{f(X)}{Mg(X)}$
3. Else return to 1.

### Gibbs Sampler

For $x^{(t)}=(x_1^{(t)},...,x_p^{(t)})$，Generate

1. $X_1^{(t+1)}\sim f_1(x_1|x_2^{(t)},...,x_p^{(t)})$
2. $X_2^{(t+1)}\sim f_2(x_2|x_1^{(t)},x_3^{(t)},...,x_p^{(t)})$
3. ...
4. $X_p^{(t+1)}\sim f_p(x_p|x_1^{(t)},...,x_{p-1}^{(t)})$

Then $$X^{(t+1)}\to X\sim f$$.

Sample Code:

```python

import random
import math
import matplotlib.pyplot as plt

def xrange(x):
    return iter(range(x))

def p_ygivenx(x, m1, m2, s1, s2):
    return (random.normalvariate(
        m2 + rho * s2 / s1 * (x - m1), math.sqrt(1 - rho ** 2) * s2))

def p_xgiveny(y, m1, m2, s1, s2):
    return (random.normalvariate(
        m1 + rho * s1 / s2 * (y - m2), math.sqrt(1 - rho ** 2) * s1))

N = 5000
K = 20
x_res = []
y_res = []
m1 = 10
m2 = -5
s1 = 5
s2 = 2

rho = 0.5
y = m2

for i in xrange(N):
    for j in xrange(K):
        x = p_xgiveny(y, m1, m2, s1, s2)
        y = p_ygivenx(x, m1, m2, s1, s2)
        x_res.append(x)
        y_res.append(y)

num_bins = 50
plt.hist(x_res, num_bins, normed=1, facecolor='green', alpha=0.5)
plt.hist(y_res, num_bins, normed=1, facecolor='red', alpha=0.5)
plt.title('Histogram')
plt.show()
```

## Slides

### Introduction

![Random_Number_Generation_Methods-page-002](Random_Number_Generation_Methods-page-002.jpg)

![Random_Number_Generation_Methods-page-003](Random_Number_Generation_Methods-page-003.jpg)

### Sampling from a uniform distribution

![Random_Number_Generation_Methods-page-004](Random_Number_Generation_Methods-page-004.jpg)

![Random_Number_Generation_Methods-page-005](Random_Number_Generation_Methods-page-005.jpg)

![Random_Number_Generation_Methods-page-006](Random_Number_Generation_Methods-page-006.jpg)

![Random_Number_Generation_Methods-page-007](Random_Number_Generation_Methods-page-007.jpg)

![Random_Number_Generation_Methods-page-008](Random_Number_Generation_Methods-page-008.jpg)

![Random_Number_Generation_Methods-page-009](Random_Number_Generation_Methods-page-009.jpg)

### Sampling from a non-uniform distribution

![Random_Number_Generation_Methods-page-010](Random_Number_Generation_Methods-page-010.jpg)

![Random_Number_Generation_Methods-page-011](Random_Number_Generation_Methods-page-011.jpg)

![Random_Number_Generation_Methods-page-012](Random_Number_Generation_Methods-page-012.jpg)

![Random_Number_Generation_Methods-page-013](Random_Number_Generation_Methods-page-013.jpg)

![Random_Number_Generation_Methods-page-014](Random_Number_Generation_Methods-page-014.jpg)

![Random_Number_Generation_Methods-page-015](Random_Number_Generation_Methods-page-015.jpg)

![Random_Number_Generation_Methods-page-016](Random_Number_Generation_Methods-page-016.jpg)

### Sampling from any distribution

![Random_Number_Generation_Methods-page-017](Random_Number_Generation_Methods-page-017.jpg)

![Random_Number_Generation_Methods-page-018](Random_Number_Generation_Methods-page-018.jpg)

![Random_Number_Generation_Methods-page-019](Random_Number_Generation_Methods-page-019.jpg)

![Random_Number_Generation_Methods-page-020](Random_Number_Generation_Methods-page-020.jpg)

![Random_Number_Generation_Methods-page-021](Random_Number_Generation_Methods-page-021.jpg)

![Random_Number_Generation_Methods-page-022](Random_Number_Generation_Methods-page-022.jpg)

![Random_Number_Generation_Methods-page-023](Random_Number_Generation_Methods-page-023.jpg)

![Random_Number_Generation_Methods-page-024](Random_Number_Generation_Methods-page-024.jpg)

![Random_Number_Generation_Methods-page-025](Random_Number_Generation_Methods-page-025.jpg)

![Random_Number_Generation_Methods-page-026](Random_Number_Generation_Methods-page-026.jpg)
