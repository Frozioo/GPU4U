// History page component, not much had to be done with this page for firbase implementation
const History = () => (
  <div class="index-body">
    <div class="background2">
      <div class="history-body" role="main" aria-live="polite">
        <h2>History of GPUs</h2>
        <p>
          Graphics processing units have been around since the early 1980s. The
          first implementation of a graphics display processesor was the NEC
          µPD7220.
        </p>
        <img src="img/NEC_D7220.jpg" alt="NEC µPD7220" />
        <p>
          However, the first true GPU was the NVIDIA GeForce 256, which was the
          first GPU released from NVIDIA. The NVIDIA GeForce 256 was released in
          1999 and was the first GPU that had integrated transform, lighting,
          triangle setup/clipping, and rendering engines. These were capable of
          processing a minimum of 10 million polygons per second.
        </p>
        <img src="img/VisionTek_GeForce_256.jpg" alt="NVIDIA GeForce 256" />
        <p>
          Since then, GPUs have become an essential part of modern computing.
          They are used in a variety of applications, including gaming, machine
          learning, and scientific computing. GPUs have become increasingly
          powerful over the years, with the latest GPUs being capable of
          processing trillions of operations per second. The latest NVIDIA GPU
          is the NVIDIA GeForce RTX 40 series, which was released in 2023. The
          picture below is the latest NVIDIA GPU, the NVIDIA GeForce RTX 4090.
        </p>
        <img src="img/NVIDIA_RTX_4090.jpg" alt="NVIDIA GeForce RTX 4090" />
        <p>
          The future of GPUs is bright, and they will continue to be an
          essential part of modern computing. GPUs will continue to become more
          powerful and efficient, enabling new applications and technologies.
        </p>
        <cite>
          Images from
          <a href="https://en.wikipedia.org/wiki/Main_Page">Wikipedia</a>
        </cite>
        <br />
        <cite>
          Information from
          <a href="https://en.wikipedia.org/wiki/Graphics_processing_unit">
            Wikipedia
          </a>
          and
          <a href="https://medium.com/altumea/a-brief-history-of-gpu-47d98d6a0f8a">
            Medium
          </a>
        </cite>
      </div>
    </div>
  </div>
);

export default History;
