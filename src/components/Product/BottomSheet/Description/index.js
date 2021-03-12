import { useState } from "react";
import cx from "classnames";
import Style from "./style.module.css";

const textDescription = `
<span class="display-block text-big text-bold margin-bottom-20px ">Cara Trading Top Up Diamond Mobile Legends</span>
<span class="text-medium"><p>Berikut adalah cara untuk membeli Top-up Mobile Legends:</p>
<ol>
<li>Pilih dagangan dan lakukan pembelian</li>
<li>Masukkan informasi yang dibutuhkan untuk Top-up (User ID Mobile Legends + Server)</li>
<li>Lakukan pembayaran atas pesanan kamu</li>
<li>Tunggu sampai penjual memproses pesanan kamu</li>
<li>Jika sudah terkirim, cek kembali Diamond Mobile Legends kamu</li>
<li>Jika sudah sesuai, klik <strong>Selesai</strong>&nbsp;untuk menyelesaikan pesanan kamu</li>
</ol>
<p>*<strong>Jangan pernah</strong> memberikan password Mobile Legends kamu</p></span>
`;

const Description = () => {
  const [toogleDesc, setToogleDesc] = useState(true);

  const createMarkup = (text) => {
    return { __html: text };
  };

  const renderDescriptionText = () => {
    if (toogleDesc) {
      const text = textDescription.substring(0, 110) + " ...";
      return <div dangerouslySetInnerHTML={createMarkup(text)} />;
    }

    return <div dangerouslySetInnerHTML={createMarkup(textDescription)} />;
  };

  return (
    <div className={Style.container}>
      <div className={cx(Style.productDescription, "font1")}>
        Description Product
      </div>
      <div className={cx(Style.description, "font2")} name="text">
        {renderDescriptionText()}
      </div>
      <div
        className={cx(Style.toogle, "font2")}
        onClick={() => setToogleDesc(!toogleDesc)}
      >
        {toogleDesc ? "Selengkapnya" : "Sembunyikan"}
      </div>
    </div>
  );
};

export default Description;
