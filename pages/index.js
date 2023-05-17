import style from "./index.module.css";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [temp, setTemp] = useState();
  const [age, setAge] = useState();
  const [name, setName] = useState();
  const [sir, setSir] = useState();
  const [sirsir, setSirsir] = useState();
  const [displayInputs, setDisplayInputs] = useState(true);
  const [firstLetter, setFirstLetter] = useState("");

  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const a1 = Math.floor(Number(temp) / 1000000) % 100;
  const a2 = Math.floor(Number(temp) / 10000) % 10;
  const a3 = Math.floor(Number(temp) / 100) % 100;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSirChange = (event) => {
    event.preventDefault();
    setSir(event.target.value);
  };

  const handleSirsirChange = (event) => {
    setSirsir(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const submit = () => {
    const firstChar = sir.charAt(0);
    setFirstLetter(firstChar.toUpperCase());
    setDisplayInputs(false);
  };

  console.log(name, age, temp, sir);
  return (
    <div>
      {displayInputs && (
        <div className={style.inputs}>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <input
            type="text"
            placeholder="регистэрийн дугаар зөвхөн тоо"
            onChange={(event) => setTemp(event.target.value)}
          />
          <input
            type="text"
            placeholder="Хүйс эр/эм"
            onChange={handleAgeChange}
          />
          <input type="text" placeholder="нэр" onChange={handleNameChange} />
          <input type="text" placeholder="овог" onChange={handleSirChange} />
          <input
            type="text"
            placeholder="ургийн овог"
            onChange={handleSirsirChange}
          />
          <button onClick={submit}>submit</button>
        </div>
      )}
      <div className={style.body}>
        <div className={style.header}>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <div className={style.nameCode}>
            <p className={style.name}>{name}</p>
            <p className={style.code}>4435543235423</p>
          </div>
          <div className={style.logo}>
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
          </div>
        </div>
        <div className={style.secondHeader}>
          <div className={style.upper}>
            Нүүр / <span>Хянах самбар</span>
          </div>
          <div className={style.lower}>
            <p>тавтай морилно уу!</p>
            <h1>
              {firstLetter}.{name}
            </h1>
          </div>
        </div>
        <div className={style.thirdHeader}>
          <p> цоо /</p>
          <p> мэдээлэл /</p>
          <p> хувийн мэдээлэл</p>
        </div>
        <div className={style.imgContainer}>
          <div className={style.imageCon}>
            <h1>хувийн мэдээлэл</h1>
            {image && (
              <Image
                className={style.image}
                src={image}
                alt="Uploaded Image"
                width={300}
                height={300}
              />
            )}
            <div className={style.about1}>
              <h1>Үндсэн мэдээлэл</h1>
              <div className={style.textcon}>
                <p>Регистэрийн дугаар</p>
                <p>уп{temp}</p>
              </div>
              <div className={style.textconBlue}>
                <p>Ургийн овог</p>
                <p>{sirsir}</p>
              </div>
              <div className={style.textcon}>
                <p>Нэр</p>
                <p>{name}</p>
              </div>
              <div className={style.textconBlue}>
                <p>Эцэг /Эх/-ийн нэр</p>
                <p>{sir}</p>
              </div>
              <div className={style.textcon}>
                <p>Яс үндэс</p>
                <p>{sirsir}</p>
              </div>
              <div className={style.textconBlue}>
                <p>Хүйс</p>
                <p>{age}</p>
              </div>
            </div>
            <div className={style.about1}>
              <h1>Төрсөн</h1>
              <div className={style.textconBlue}>
                <p>Огноо</p>
                <p>
                  200{a1}-{a2}-{a3}
                </p>
              </div>
              <div className={style.textcon}>
                <p>Газар</p>
                <p>Улаанбаатар</p>
              </div>
            </div>
            <div className={style.about1}>
              <h1>Иргэний үнэмлэх</h1>
              <div className={style.textconBlue}>
                <p>Бүртгэлийн дугаар</p>
                <p>4435543235423</p>
              </div>
              <div className={style.textcon}>
                <p>Олгосон огноо</p>
                <p>
                  {Math.abs(a1 - 2023)}-{a2}-{a3}
                </p>
              </div>
              <div className={style.textconBlue}>
                <p>Хүчинтэй хугацаа</p>
                <p>
                  {Math.abs(a1 - 2023) + 9}-{a2}-{a3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
