---
title: Optimistic Blockchain Anchoring 
layout: home
parent: OpenDSU Advanced
nav_order: 16
---
<style>
  /* Styles for the modal */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
  }

  /* Modal content */
  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
  }

  /* Close button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>
<body>

<div id="myModal" class="modal" onclick="closeModal()">
  <span class="close" onclick="event.stopPropagation(); closeModal()">&times;</span>
  <img class="modal-content" id="img01" onclick="event.stopPropagation()">
</div>

<script>
function openModal(imgSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
</script>

</body>


# **Optimistic Blockchain Anchoring (RFC-103)**


{: .accepted }
The proposal has been accepted and has an implementation.


**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)
 
<!-- TOC -->
* [Abstract](#abstract)
* [1. Optimistic Blockchain Anchoring (OBA)](#1-optimistic-blockchain-anchoring-oba)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **Abstract**

<p style='text-align: justify;'>This RFC presents the concept of Optimistic Blockchain Anchoring. It is an introduction providing explanations about the way OBA works, its components, its flow and steps.
</p>

# **1. Optimistic Blockchain Anchoring (OBA)**

<p style='text-align: justify;'>OBA (Optimistic Blockchain Anchoring) is an optimized anchoring strategy that is, at the moment, created specially for Quorum, but could be used for other blockchain networks on other blockchain technologies. OBA’s purpose is to offer quick feedback (lower the response time of the blockchain anchoring process, which translates into higher rates of anchoring) when dealing with slow blockchain networks.
</p>

<p style='text-align: justify;'>The general schema is shown in the figure below. It explains the operating principle more clearly. The OpenDSU SDK sends requests via web services to APIHub, more precisely to anchor strategies from APIHub, and then, they are sent to the Ethereum Adapter (used as an intermediary). The Ethereum Adapter can be later removed from this schema by adding new strategies to the OBA to gain extra capabilities and lower the response time even more. For now, the ETH Adapter is the one that sends requests to Quorum, blockchain or blockchain networks.
</p>


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vQe1azoQQoYH8f_cqJGyd8Jt3A6bAZvX3ol8ax7gC6HBPB_uSFH15JgCNUmJ04bXoUYh1NCXfp4-xJa/pub?w=1247&h=422" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>
<p style='text-align: center;'><b>Figure 1: Optimistic Blockchain Anchoring</b></p>

<p style='text-align: justify;'>Inside the APIHub diagram, we can observe the Optimistic Blockchain Anchoring (OBA) steps. The process of implementing the OBA starts with checking the anchors, more specifically, verifying the correctness of the anchoring requests by comparing it with the last hash of the HashLink in the anchor. These cryptographic checks/verifications show if the anchoring request is correct. The optimistic execution is made, which means that synchronization/queries of the Quorum Network are not required. These transactions are put in a pending queue so they can be synchronized later with Quorum. The transactions are sent regularly to Quorum (see Figure 2: OBA Pending queue) and, depending on their success or failure, they are retried later.
</p>


<div style="display: flex; justify-content: center;">
  <img 
    alt="" 
    src="https://docs.google.com/drawings/d/e/2PACX-1vQ7vyU-Gzu7-m3Ckbypb7LHc-L9mWibteEZZXd7sd5y016yx-B1fTBQslUGXOrPqNzCvokwqnapjjW1/pub?w=1650&h=1055" 
    class="imgMain" 
    style="max-width: 100%; cursor: pointer; transition: max-width 0.3s ease-in-out;"
    onclick="openModal(this.src)"
    title="Click to Zoom"
  />
</div>

<p style='text-align: center;'><b>Figure 2: OBA pending queue</b></p>



<p style='text-align: justify;'>The synchronization algorithm (OBA pending queue) is based on the following rules: each transaction has a field called tc (transaction counter), which is incremented at every attempt to synchronize, and another field called schedule. The “schedule” field can have three values: null, sent string, or timestamp (when the transaction is scheduled for synchronization). The algorithm is carried out in 2 stages, called Timer 1 and Timer 2. In the first stage (Timer 1 configured by default), the current implementation happens during the ten seconds after an APIHub Restart. In the second stage (Timer 2), the implementation happens repeatedly every seventeen seconds.
</p>

<p style='text-align: justify;'>The first stage (Timer 1) is composed of the first entry in Figure 2 (“At APIHub Restart”). At APIHub Restart, the behavior of OBA is that we have an initialization of all transaction fields in the pending queue, which is given by the following formula:
</p>

<p style="text-align:center"> <b>scheduled : = null</b></p>


<p style='text-align: justify;'>The formula results indicate that all the transactions are null.</p>

<p style='text-align: justify;'>The second stage (timer 2) happens every seventeen seconds and has a longer algorithm. In the “Prepare the transmission time” phase, the pending queue is created, also querying all the fields that have null at the scheduled field and have no dependencies (the dependencies term will be presented later). After they have made this request (request for all transactions), they set the schedule field by using the formula:
</p>

<p style="text-align:center"> <b>scheduled : = currentTime + (tc > 100 ? tc : 100) * 10</b></p>


<p style='text-align: justify;'>This formula tries to schedule transactions later, also taking into consideration the number of attempts already executed until this point in time. To avoid server overload, which means having too many attempts at the same time, we have this algorithm, which delays transactions more and more, until the 100th try, where there are 1000 seconds to retry. These are parameters used for the current implementation, but they can be changed or adapted to be in sync with those used by the blockchain network or other business logic needs.
</p>

<p style='text-align: justify;'>Afterwards, the following steps are going to take place: first, interrogate all transactions, then filter out the transaction that has the scheduled field smaller than the current time (anchoring transaction towards blockchain), because transactions have been scheduled to execute up to the current time by the following formula:
</p>

<p style="text-align:center"> <b>scheduled < currentTime</b></p>


<p style='text-align: justify;'>Later, these transactions are set to the sent value, and transmitted to Ethereum Adapter for execution. From the Ethereum Adapter, they may return with different types of errors (Anchoring Fails), which we have divided into two important groups. The first group includes the errors that are rejected by Ethereum Adapter for various reasons, such as: the Ethereum Adapter is not accessible, the Throttler rejects the transaction, the network between the Ethereum Adapter and blockchain is not connected, or maybe even the blockchain is not working, not responding. In this case, it increments the field tc, and it logs with a warning code 0X01. Then, the field “scheduled” is set to null to be reprogrammed by Timer 1. The formula used is:
</p>

<p style="text-align:center"> <b>tc++ (special log if tc == 100: WARN 0X01)</b></p>

<p style="text-align:center"> <b>scheduled : = null</b></p>


<p style='text-align: justify;'>The second group of errors includes those that are rejected by the blockchain because the transaction is invalid as a result of the cryptography, signatures, no gas, or other reason, so the transaction is removed from the pending queue, and it logs a critical error of the form: CRITICAL 0X01.
</p>

<p style='text-align: justify;'>In the last case (happy path), in which the anchoring was successful (Anchoring is Successful), we specify that the steps are represented by the deletion of the transaction from the pending queue and then logged in the following form: information INFO 0x02, which means that the operation is successful.
</p>




**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>





# **Annex 1. Contributors**

| **Current Editors**                 | **Email**                                |
|:------------------------------------|:-----------------------------------------|
| Sînică Alboaie                      | sinica.alboaie@axiologic.net             |
| Rafael Mastaleru                    | rafael@rms.ro                            |
| Andi-Gabriel Țan                    | andi@axiologic.net                       |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |
| Teodor Lupu                         | teodor@axiologic.net                     |
| **Contributors Axiologic Research** | **Email**                                |
| Adrian Ganga                        | adrian@axiologic.net                     |
| Andi-Gabriel Țan                    | andi@axiologic.net                       |
| Cosmin Ursache                      | cosmin@axiologic.net                     |
| Daniel Sava                         | daniel@axiologic.net                     |
| Nicoleta Mihalache                  | nicoleta@axiologic.net                   |
| Teodor Lupu                         | teodor@axiologic.net                     |
| **PharmaLedger Contributors**       | **Email**                                |
| Ana Balan                           | bam@rms.ro (RMS)                         |
| Bogdan Mastahac                     | mab@rms.ro (RMS)                         |
| Cosmin Ursache                      | cos@rms.ro (RMS)                         |
| Rafael Mastaleru                    | raf@rms.ro (RMS)                         |

