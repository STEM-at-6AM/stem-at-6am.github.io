---
layout: post

title:  "Can you travel negative distance?"
description: "Intro to Vectors"

author: Beth Diamond
date:   2023-12-04 06:00:00 +0000
categories: maths linear-algebra

image: "assets/posts/maths/linear-algebra/intro-to-vectors/houses.jpg"

permalink: /:categories/:title
---

Can you go on a -60 mile journey? What about trying to drive at -40mph? Wouldn’t doing either of these things be breaking some law of the universe and send you back in time or something? Fortunately for you, probably not, because measuring quantities like these using negative numbers is pretty common when we’re using **vectors**.

<!-- more -->

To see why vectors are useful, let’s imagine you’re a delivery driver who’s out delivering parcels. You’re new to the job, so you’ve only been given a single street to deal with, but unfortunately none of the buildings have numbers on them! (maybe that’s why the last guy quit…). How are you supposed to know where to deliver the packages?

![A street with a delivery truck waiting at the far left. There are 9 buildings on the street, ordered as follows: a church, a yellow house, a blue house, a small shop, a purple house, a red house, a larger shop, an office building, and another blue house.](assets/posts/maths/linear-algebra/intro-to-vectors/street.gif)

Luckily, you’ve been sent out with the _GPS Address Decoder 3000_: Simply punch in an address and it’ll use fancy GPS satellites to tell you exactly how far you need to move to get there! It’s state of the art technology! Or at least it probably was in 1992…

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-welcome.png" alt="An image of the GPS Address Decoder 3000: an old-looking digital device with a green screen and pixellated text. The main text reads: GPS ADDRESS DECODER 300. WELCOME. There is an indicator in the top-left which reads: Vector Mode: Off."/>

…Either way, it’s all you’ve got, so it’ll have to do. To make our job easier, let’s simplify this street as a grid. Each building is roughly the same distance apart, so let’s call that distance **1 unit**:

![A grid with 9 squares. The delivery truck is on the first line, while on each subsequent dividing line a building from the street above is placed. A label marks that each square represents 1 Unit of distance.](assets/posts/maths/linear-algebra/intro-to-vectors/street-grid.gif)

It’s time for your first delivery! Let’s see, the first package is addressed to the house... "_Ahead in Red_"? Let’s give your gadget a try:

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-move6.png" alt="The GPS Address Decoder reads: MOVE 6. The indicator in the top-left reads: Vector Mode: Off."/>

…Well, you can’t say it isn’t concise. Let’s move 6 along and make your delivery!

![An image of the grid from before. The delivery truck has moved 6 squares to the right, ending on the grid line where the red house is placed.](assets/posts/maths/linear-algebra/intro-to-vectors/grid-move6.gif)

Great, that wasn’t so hard. Where’s the next package going? "_The Blue House_"? Hmm, no marks for creativity with that one. Let’s ask the decoder:

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-move3.png" alt="The GPS Address Decoder reads: MOVE 3. The indicator in the top-left reads: Vector Mode: Off."/>

That seems easy enough… But wait, isn’t there a problem?

![The truck is still at the red house. Each grid line to both the left and right of the truck is labelled 1, then 2, then 3, illustrating that there are 2 positions on the grid which are a distance of 3 away. Both of the buildings that are at a distance of 3 are blue houses.](assets/posts/maths/linear-algebra/intro-to-vectors/which-direction.gif)

_Move 3 in which direction?_

This is no good - how will you know where this package is going now? _The Blue House_ isn’t helpful – they’re _both_ blue houses! And what's this weird _vector mode_ on our decoder? Let's turn it on and see if it can help:

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-move-3.png" alt="The GPS Address Decoder reads: MOVE -3. The indicator in the top-left reads: Vector Mode: ACTIVE."/>

Huh? Now it’s telling us to move _-3_? How are we supposed to move a negative amount? Perhaps it’ll make more sense if we number the buildings on your street:

![Each grid line is numbered 0 to 9, from left to right. The truck is still at the red house, which is numbered as position 6.](assets/posts/maths/linear-algebra/intro-to-vectors/numbers6.png)

Now it’s a bit clearer, right? This is just a number line! If we’re at position **6**, then moving -3 just means moving to position **3**, because 6 – 3 = 3 !

![The truck has moved 3 squares to the left, ending on the first blue house at position 3.](assets/posts/maths/linear-algebra/intro-to-vectors/numbers3.png)

This is how vectors represent **direction** – a **positive** number means move one way, and a **negative** number means move the other. If our decoder had still told us to move _positive_ 3 once we activated vector mode, then we would have moved the other way and ended up at position 6+3: position **9**:

![The truck has moved 3 squares to the right, ending on the second blue house at position 9.](assets/posts/maths/linear-algebra/intro-to-vectors/numbers9.png)

This also demonstrates the difference between **distance** and **displacement**. In both of the above scenarios, we travelled a **distance** of 3, and yet we ended up in different spots! This is because distance only describes the size, or **magnitude**, of the amount we travelled – it doesn’t care about direction! This is why distance _isn’t_ a vector, and also why we can’t travel a negative distance. What would it mean to move an _amount_ that was less than zero? It doesn’t make sense!

If we need to take direction into account, we have to use **displacement**. This is what the decoder is displaying when its vector mode is activated! Displacement _is_ a vector, because it has the two qualities of a vector:
* A **magnitude** (this is your distance!)
* A **direction**

This is why displacement _can_ be negative: the negative sign doesn’t mean it has a _magnitude_ of less than zero, it just means the magnitude is pointing in the opposite direction! When we talk about real-world quantities, we often encounter vector-magnitude pairs like displacement and distance. Another common one is **velocity** and **speed**: speed just tells you how fast something is moving, but velocity can tell you which direction its moving in as well!

It’s now your next day at work, and since you did so well yesterday, you’ve been given two streets to deliver to:

![Another grid of 18 squares is displayed, numbered -9 to 9 from left to right. The delivery truck is at position 0 in the centre. Pictures of the buildings have been omitted.](assets/posts/maths/linear-algebra/intro-to-vectors/street18.png)

What’s your first instruction?

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-move-2.png" alt="The GPS Address Decoder reads: MOVE -2. The indicator in the top-left reads: Vector Mode: ACTIVE."/>

![The truck has moved 2 squares to the left, ending up at position -2.](assets/posts/maths/linear-algebra/intro-to-vectors/street18-2.png)

Now your displacement is **-2**. That just means you moved a **distance** of **2** in the **negative direction**. It’s useful to note that which direction is **positive** and which direction is **negative** is completely arbitrary, we could easily do it the other way around if we felt like it! The only important thing is that both you and the decoder agree which is which, so you don’t start moving the wrong way.

Ok, you’re getting the hang of this! Let’s see where this next package is go-

Huh? It has a note on it:

<img src="assets/posts/maths/linear-algebra/intro-to-vectors/note.png" style="width: 100%; max-width: 500px;" alt="A yellow post-it note with a handwritten message that reads: Had some people call out sick - these ones are for the rest of the block. Thanks."/>

Great. Your second day and you’re already being given extra work – now you’ve got the whole block to deliver to!

<img src="assets/posts/maths/linear-algebra/intro-to-vectors/houses.jpg" style="width: 100%; max-width: 700px;" alt="An illustration of many multicoloured houses."/>

Where have you got to go now? Let’s head back to 0 – that should make the instructions easier to understand.

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-move5.png" alt="The GPS Address Decoder reads: MOVE 5. The indicator in the top-left reads: Vector Mode: Off."/>

Well, that doesn’t seem too hard… Wait! The machine’s switched itself off of vector mode! (this is why you shouldn’t be relying on 30-year-old tech…). Let’s switch it back on:

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-move34.png" alt="The indicator in the top-left reads: Vector Mode: ACTIVE. The main text reads: MOVE (3 4) (where (3 4) is a column vector)."/>

…What the heck? What’s <math>{% include math/vector.html a='3' b='4' %}</math> supposed to mean? Why are there two numbers now? The decoder told you a second ago that you needed to move a distance of 5, so why are NEITHER of these new numbers a 5? Let’s look at a grid of the block:

![A large grid of 18 squares by 18 squares is displayed. A horizontal axis labels the grid -9 to 9 from left to right, and a vertical axis labels the grid -9 to 9 from bottom to top. The delivery truck is in the centre at the coordinate (0,0).](assets/posts/maths/linear-algebra/intro-to-vectors/grid-block.gif)

That sure is a lot more houses. We know that your next house is a distance of **5 units** away, so let’s consider that first. How many possible locations could the next house be at?

When you were delivering before, you were moving in a single **dimension**, so there were 2 possible directions in which you could travel - forwards and backwards. This meant there were **2** locations that were a distance of 5 away. Now that you have to deliver to an entire block of houses, you’ll have to move side-to-side as well, meaning that you’ll have to move in **2 dimensions** (the grid above labels this second dimension by adding a second, vertical number line). So, if **1** dimension means **2** possible locations, then perhaps **2** dimensions gives us **4**?

![Red arrows labelled "here?" point at the 4 coordinates (0,5), (5,0), (0,-5), (-5,0).](assets/posts/maths/linear-algebra/intro-to-vectors/grid-block-arrows.png)

That seems right, right? Actually, wrong! The 4 places marked above certainly _are_ possible locations, but there are a bunch more we’ve missed out! Look:

![A red circle of radius 5 is drawn on the grid, with the delivery truck at the centre. 12 red arrows point to every location where the circle crosses an intersection of the grid lines. These include the 4 coordinates from before: (0,5), (5,0), (0,-5), (-5,0), but also 8 new coordinates: (3,4), (4,3), (4,-3), (3,-4), (-3,-4), (-4,-3), (-4,3), (-3,4).](assets/posts/maths/linear-algebra/intro-to-vectors/grid-block-circle.png)

The circle marks every point on the grid that’s a distance of 5 away from you – that’s a lot more than 4! (fun fact: a set of points all of equal distance from a certain place is actually the definition of a circle!). Even if we assume that there are only houses at the points where the grid squares cross, that’s still **12** possible locations! This point at the coordinate **(3,4)**, for example, was missed out entirely:

![The grid is cropped to show only the top-right, or positive, quadrant. An arrow points to where the circle crosses at coordinate (3,4).](assets/posts/maths/linear-algebra/intro-to-vectors/grid-block-circle-crop.png)

…Hang on, **(3,4)**? Doesn’t that look familiar?

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-move34.png" alt="The indicator in the top-left reads: Vector Mode: ACTIVE. The main text reads: MOVE (3 4) (where (3 4) is a column vector)."/>

It’s almost the same as the vector your decoder gave you! In fact, if you start from 0, moving by the vector **<math>{% include math/vector.html a='3' b='4' %}</math>** will take you to the coordinate **(3,4)**!

![The grid is cropped to show only the top-right, or positive, quadrant. The delivery truck has moved to the coordinate (3,4).](assets/posts/maths/linear-algebra/intro-to-vectors/grid-block-34.png)

This is because, in the same way a coordinate gives a **horizontal** position and a **vertical** position $$(x, y)$$, a vector gives a **horizontal** magnitude and direction, and a **vertical** magnitude and direction, <math>{% include math/vector.html a='x' b='y' %}</math>. We need to move in **2 dimensions**, so of course our vector needs **2 numbers** – one to describe each of them! We can recover the overall magnitude of the vector (the total distance of 5) using **Pythagoras’ Theorem**:

<math display="block">
    <msqrt>
        <msup>
            <mn>3</mn>
            <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
            <mn>4</mn>
            <mn>2</mn>
        </msup>
    </msqrt>
    <mo>=</mo>
    <mn>5</mn>
</math>

Wait, _Pythagoras_? Isn’t that to do with triangles? Yep! We can use it here because the two numbers that form the vector actually describe the two sides of a right-angled triangle:

![The grid is cropped to show only the top-right, or positive, quadrant. A right-angled triangle is drawn such that the hypotenuse starts at (0,0) and ends at (3,4). The sides are labelled 3, 4, and 5 respectively, indicating the lengths of the sides.](assets/posts/maths/linear-algebra/intro-to-vectors/grid-block-triangle.png)

Let’s try another delivery:

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-move42.png" alt="The GPS Address Decoder reads: MOVE (4 2). The indicator in the top-left reads: Vector Mode: ACTIVE."/>

Ok, so this means you need to travel **4** units in the **positive horizontal direction**, and **2** units in the **positive vertical direction**, right?

![The grid is cropped to show only the top-right, or positive, quadrant. The delivery truck has moved to the coordinate (7,6).](assets/posts/maths/linear-algebra/intro-to-vectors/grid-block-76.png)

Sure does! But wait, you moved **<math>{% include math/vector.html a='4' b='2' %}</math>**, but you’re not at the coordinate **(4,2)**: you’re at **(7,6)**! Why’s that? 

It’s because you didn’t start at (0,0) this time – you were already at (3,4), remember? Your new vector got added on to your previous one:

<math display="block">
    {% include math/vector.html a='3' b='4' %}
    <mo>+</mo>
    {% include math/vector.html a='4' b='2' %}
    <mo>=</mo>
    {% include math/vector.html a='7' b='6' %}
</math>

Huh. Seems as though we can add vectors together just like regular numbers: 3+4=7, 4+2=6. That’s useful!

Just one more delivery left for today! Where’s it going?

<img class="decoder" src="assets/posts/maths/linear-algebra/intro-to-vectors/pda-move0-9.png" alt="The GPS Address Decoder reads: MOVE (0 -9). The indicator in the top-left reads: Vector Mode: ACTIVE."/>

Now we know we can just add vectors together to get our new coordinate, let’s see if we can figure out where you’ll end up without looking at the grid at all! You’re currently at position (7,6), so:

<math display="block">
    {% include math/vector.html a='7' b='6' %}
    <mo>+</mo>
    {% include math/vector.html a='0' b='-9' %}
    <mo>=</mo>
    {% include math/vector.html a='7' b='-3' %}
</math>

Do you end up at coordinate **(7,-3)**?

![The full grid is displayed. The delivery truck has moved to the coordinate (7,-3).](assets/posts/maths/linear-algebra/intro-to-vectors/grid-block7-3.png)

Yep!

So to summarise:
* **Vectors** are objects that contain both a **magnitude** and a **direction**
* How many numbers, or **components**, we need for our vector depends on how many **dimensions** we’re working in – 2 dimensions requires vectors with 2 components!
* Vectors can have **negative components** – the negative is contributing to the direction part, not the magnitude part!
* We can **add** vectors together similarly to how we add non-vectors

and finally...
* **Delivery companies** need to stop using technology they bought in the **early nineties**

<style>
    #post-content .decoder {
        width: 100%;
        max-width: 500px;
    }
</style>