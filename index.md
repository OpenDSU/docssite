---
title: Home
layout: home
nav_order: 1
---

# **OpenDSU Homepage**

<p style='text-align: justify;'>The cornerstone principle driving the creation of OpenDSU is Digital Sovereignty—a foundational concept advocating for individuals, citizens, enterprises, organizations, and states to retain maximum control over their data, independent of intermediaries.
</p>

<p style='text-align: justify;'>Following our exploration within the realm of OpenDSU, we have observed that the notion of consolidating all global data within a single expansive blockchain, as envisioned by certain projects like Ethereum, is impractical. The idealized vision of a uniformly governed digital landscape proves unattainable in reality.
</p>


<p style='text-align: justify;'>Thus, the OpenDSU team has introduced Hierarchical Blockchains, multiple interconnected blockchains with a comprehensive naming system. This enables seamless interoperability across applications, making the choice of blockchain for data anchoring irrelevant. The focus is on Data Sharing Units (DSUs), defining OpenDSU. It's an evolving standard creating off-chain data storage systems permanently anchored in a blockchain for security and data provenance.
</p>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YouTube Video Cards Slideshow</title>
<style>
    .slideshow-container {
        position: relative; /* Set the container as the positioning context */
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
    }
    .slideshow {
        display: flex;
        flex-wrap: nowrap;
        transition: transform 0.3s ease;
    }
    .card {
        flex: 0 0 calc(50% - 20px);
        margin: 10px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    iframe {
        width: 100%;
        height: 200px;
    }
    h2 {
        margin-top: 10px;
    }
   .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 5px;
    color: purple; /* Set color to purple */
    background-color: transparent; /* Set background color to transparent */
    border: none;
    outline: none;
    z-index: 1000; /* Increase the z-index */
    font-size: 40px; /* Increase the font size */
}
    .prev {
        left: 30px;
    }
    .next {
        right: 30px;
    }
</style>
</head>
<body>

<div class="slideshow-container">
    <div class="slideshow">
        <div class="card">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/n6YiWk8t3W0?si=6l1jbqU3aq2Gf_IN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <b>OpenDSU Pitch in 3 minutes <br> (1)</b>
        </div>
        <div class="card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RYxe61jE_J8?si=boFeN1F96bZQWeCD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <b> Insights about Enteprise Blockchain Solutions (Adoption & Properites) <br> (2)</b>
        </div>
        <div class="card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tYjIfKK4TOQ?si=s9Ep9lFXx-H33sv6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <b>Decentralised EPCIS with Digital Twins and OpenDSU <br> (3)</b>
        </div>
        <div class="card">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/BB7XcK8Ptss?si=szd06PzJIvXtUx2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <b>OpenDSU Technical Introduction <br> (4) </b>
        </div>
        <div class="card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HCkeFXyeJxg?si=3eWIn8wbNRMlybUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <b>OpenDSU Overview for Enterprise Architects and Business Stakeholders <br> (5) </b>
        </div>
        <div class="card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0A3bGUAajrM?si=KSaBfEwnUbs8ADiD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <b>Open DSU for Data Sharing in Enterprise Blockchain Systems and Digital Trust Ecosystems <br> (6)</b>
        </div>
    </div>
</div>
<button class="prev" onclick="scrollSlides(-1)">❮</button>
<button class="next" onclick="scrollSlides(1)">❯</button>

<script>
    let slideIndex = 0;
    const container = document.querySelector('.slideshow-container');
    const cards = document.querySelectorAll('.card');

    function scrollSlides(n) {
        slideIndex = (slideIndex + n + cards.length) % cards.length;
        const slideWidth = container.offsetWidth;
        container.scrollLeft = slideIndex * slideWidth;
    }
</script>

</body>
</html>

<br>
<br>
<br>

 **Copyright** © 2018-2024 Axiologic Research and Contributors.