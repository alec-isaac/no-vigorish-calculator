# no-vigorish-calculator
Accepts Two MLs For a Particular Game -> Distills the No-Vig Probability of Each Team/Prop Winning

# Description 

This Calculator removes the Sportsbooks "Vig" or "Edge" and returns the percentage likelihood of each Team/Prop winning. 

This Calculator outputs the following: 

(1) The Inputted MLs For Each Team/Prop
(2) The No-Vig ML For Each Team/Prop
(3) The Vig Probabilities of Each Team Winning'
(4) The No-Vig Implied Probabilities of Each Team Winning
(5) The Total Vig Added to the Event

# Installation

Clone/Download the Github Repository 

# Usage 

After Cloning/Downloading

In Terminal:
(1) Navigate into no-vigorish-calculator-master 
(2) Navigate into no_Vig_Calc
(3) npm install

Then to produce Calculator Outputs, in Terminal: 
(4) node no_Vig_Yargs.js convertML --ml_One={firstMLHere} --ml_Two={secondMLHere}
        
        i.e., node no_Vig_Yargs.js convertML --ml_One=-140 --ml_Two=125

        Outputs [![Screen-Shot-2020-06-15-at-3-39-19-PM.png](https://i.postimg.cc/G2y7Kvkd/Screen-Shot-2020-06-15-at-3-39-19-PM.png)](https://postimg.cc/JDR54D62)

# Why Use a No-Vig Calc 

"Vig", "Vigorish", or "Juice" all refer to the Sportsbooks cut of action for booking your wager on a game / event and is akin to the "rake" in poker. 

The Vig is how the sportsbooks profit off of taking wagers. 

A simple example: 

The sportsbook offers Team A @ -145 and Team B +7 @ +120. 

Travis decides to bet $145 on Team A. If successful this Bet will net Travis a profit of $100 and his $145 back. 
Josh decides to bet team $100 on Team B. If successful this Bet will net Josh a profit of $120 and his $100 back. 
No one else bets on the game so the Sportsbook has only taken $245 in total bets. 

The outcome ends up that team B wins. The sportsbook will then return Josh's wager of $100 back along with the $120 he won. Travis gets nothing. 
Thus, the sportsbook started with $245 and returned $220, so they are left with $25 in profit for facilitating the bets. This $25 profit is a result of the Vig placed on each team by the sportsbook. 

However, the implied probability of each team winning is not the same as what the spreads (-145, +120) above indicate. 

Using this Calculator you would find that with the Vig, Team A had a 59.20% chance of winnning and Team B had a 45.50% chance of winning. Adding these two numbers up leaves you with a number greater than 100%. This is no accident, the difference above 100% is the Vig added by the sportsbook. 

Thus, by using this Calculator to remove this juice, we find that the actual probability of Team A winning is 56.56% and Team B had a chance of winning of 43.44%. 

These figures represent the true odds of each team winning, and as such should be used when line shopping and deciding where the team you are going to bet has the highest best value when compared to the true probability of winning. 
