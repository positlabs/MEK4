# MEK4

<h2>Inspiration</h2>

<p>A huge amount of Reels are focused on dancing. We wondered: How can we make the expression of dancing in Reels more interesting. </p>

<p><img src="https://res.cloudinary.com/devpost/image/fetch/s--8xj4jg1c--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://raw.githubusercontent.com/kunofellasleep/imageurl/master/MotionAmplification2.gif" alt="MotionAmplification" data-canonical-url="https://raw.githubusercontent.com/kunofellasleep/imageurl/master/MotionAmplification2.gif">  </p>

<p>We were inspired by motion amplification that shows micro movements in machines. The tool finds the moving areas, the direction they're moving in and enhances those movement to become visible. </p>

<h2>What it does</h2>

<p>While dance movements are already visible, we enhance them by extracting their directions and create different effects that dancers can use to make their dancing look more exciting. </p>

<p><img src="https://res.cloudinary.com/devpost/image/fetch/s--CTJbDugS--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://raw.githubusercontent.com/kunofellasleep/imageurl/master/Arrows.jpg" alt="Arrows" data-canonical-url="https://raw.githubusercontent.com/kunofellasleep/imageurl/master/Arrows.jpg"></p>

<p>Arrows, the first effect we created for this Hackathon</p>   

<p>The filter understands which part of the dancer is moving up, down, left or right and translates those movements into the separated edges of the silhouette.
After the SegmentDirection Tool was created we came up with four different filters that use that new function in fun ways. </p>

<p><img src="https://res.cloudinary.com/devpost/image/fetch/s--73n_A5j9--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://raw.githubusercontent.com/kunofellasleep/imageurl/master/effectReel.gif%3F4" alt="Reels" data-canonical-url="https://raw.githubusercontent.com/kunofellasleep/imageurl/master/effectReel.gif?4"></p>

<p>Our ideas came from manga, kirakira and... Rihanna. </p>

<p><img src="https://res.cloudinary.com/devpost/image/fetch/s--7jF1ALMt--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://raw.githubusercontent.com/kunofellasleep/imageurl/master/Effects.gif" alt="Effects" data-canonical-url="https://raw.githubusercontent.com/kunofellasleep/imageurl/master/Effects.gif">  </p>

<p><strong>0. Line Ripples</strong></p>

<p>The dancer's movements are translated into graphical ripples around them. They emphasize the current dance moves and also, by slowly fading away, show the past moves.</p>

<p><strong>1. Energetic Steam</strong></p>

<p>This effect is created to give more energy to the dancer's performance in Reels. The divided edge area of the segmentation balances the amount of steam and its direction.</p>

<p><strong>2. Kirakira Trail</strong></p>

<p>The fascination of kirakira effects is undeniable. We wanted to bring kirakira to the next level by making them particles that react to your movements.</p>

<p><strong>3. When the Sun Shines We Shine Together</strong></p>

<p>The dance moves create water that travels, as if it got momentum. So rather than just upwards "falling" water, the movement's direction is shown in the direction the water flies away. </p>

<h2>How we built it</h2>

<p><img src="https://res.cloudinary.com/devpost/image/fetch/s--jgCYnYiK--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://raw.githubusercontent.com/kunofellasleep/imageurl/master/motionincolor.gif" alt="MotionInColor" data-canonical-url="https://raw.githubusercontent.com/kunofellasleep/imageurl/master/motionincolor.gif">  </p>

<p>The core system of all effects, the SegmentDirection Tool,  is based on the extraction of the segmentation alpha channel's travel direction. This is achieved by acquiring the adjacent pixels and the delay frame. We have generated segmentation alphas for each direction of movement and created a patch asset that can retrieve them.</p>

<p><img src="https://res.cloudinary.com/devpost/image/fetch/s--mjRknYTN--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://raw.githubusercontent.com/kunofellasleep/imageurl/master/CustomPatch.png" alt="CustomPatch" data-canonical-url="https://raw.githubusercontent.com/kunofellasleep/imageurl/master/CustomPatch.png"><br>
<em>A Patch Asset to split the segmentation we created</em>   </p>

<p>The SegmentDirection Tool allows you to create more complex segmentation effects that are based on the movement's direction. We created the four different effects to show the potential of this idea and its advantage for Reels filters. </p>

<p>The filters will be published separately, but for demonstration purpose we combined them into one. Eventual fps lacking doesn't happen in the separated filters. </p>

<h2>Accomplishments that we're proud of</h2>

<p>We started our team for the first Hackathon this year. Unfortunately, our <a href="https://devpost.com/software/xxx-uq2mhy" rel="nofollow">black hole filter</a> didn't make any place at that time, but the teamwork was perfect. 
We appreciate each other's talents and we are proud that we were able to participate in this Hackathon again with the same team.</p>

<p>This time we took the hacking part more literal and "hacked" a new function into Spark AR, while also focusing on making useful and fun filters. We hope other creators benefit from the SegmentDirection Tool and create beautiful filters. </p>

<p><img src="https://res.cloudinary.com/devpost/image/fetch/s--r8jSuFCS--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://raw.githubusercontent.com/kunofellasleep/Singularity/master/images/omega.png" alt="omega" data-canonical-url="https://raw.githubusercontent.com/kunofellasleep/Singularity/master/images/omega.png"> <img src="https://res.cloudinary.com/devpost/image/fetch/s--ZzhBdChA--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://raw.githubusercontent.com/kunofellasleep/Singularity/master/images/kuno.png" alt="kuno" data-canonical-url="https://raw.githubusercontent.com/kunofellasleep/Singularity/master/images/kuno.png"><br>
<em>Adrian Steckeweh <a href="https://www.instagram.com/omega.c/" rel="nofollow">@omega.c</a> + Hayato Kuno <a href="https://www.instagram.com/kuno.fell.asleep/" rel="nofollow">@kuno.fell.asleep</a></em>   </p>

<h2>What we learned</h2>

<p>We've gained a better understanding of new features like delay frames and render passes.</p>

<h2>What's next for „Motion Effect Kit“</h2>

<p>With the SegmentDirection Tool it is now possible to track motions and their direction. It's an idea that's only possible because of the latest Spark AR Studio, and we think it's going to be the helpful for other creators. We'd love to see what kind of filters other people can create by distributing the patch. We also hope to create more effects that take advantage of this feature ourselves in the future.</p>
