import Card from './Card';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const Cards = () => {
  const { activeIndex, lang, response } = useContext(GlobalContext);

  const primaryLang = 'english';
  const currentData = response[lang].dataset[activeIndex];

  const {
    size: currentSize,
    model: currentModel,
    images: currentImages,
  } = currentData;

  // 1) Mevcut boyutun kendine ait ekran görüntüsü olup olmadığını kontrol eder.
  //    Eğer varsa cards değişkenine atama yapar.
  let cards = (currentImages || []).map((item, index) => (
    <Card
      key={index}
      img={item}
      title={currentModel}
      size={currentSize}
      lang={lang}
    />
  ));

  // 7) response.json içerisinde, aranan boyutun eşleştiği ve images değerinin null olmadığı sonuçlar aranır.
  const searchAlternativeImage = (lang, size) => {
    return response[lang].dataset.filter(
      (item) => item.size === size && item.images !== null
    );
  };

  // 5) Birincil ve ikincil diller için resim araması, aynı componentBuilder fonksiyonunda yapılmaktadır.
  //    Bu sebeple lang ve size değerleri argüman olarak alınmaktadır.
  //    Sonrasında searchAlternativeImage fonksiyonuna bu boyutlar ve dil gönderilerek response.json verileri arasında uygun eşleşme aranır.
  //    Eğer eşleşme sağlanırsa, <Card /> komponenti cards değişkenine atanır ve JSX olarak döndürülür.
  //    Eğer eşleşme sağlanmazsa, birincil dil olduğu için diğer dillerde arama yapılmaz.
  //    cards değişkenine "NO SCREENSHOTS" değeri atanarak JSX olarak döndürülür.
  const componentBuilder = (lang, size) => {
    if (searchAlternativeImage(lang, size).length > 0) {
      cards = searchAlternativeImage(lang, size)[0].images.map(
        (item, index) => (
          <Card
            key={index}
            img={item}
            title={currentModel}
            size={size}
            lang={lang}
          />
        )
      );
    } else {
      cards = <Card size={0} lang={''} />;
    }
  };

  // 6) İkincil diller için, primaryBuilder'de olduğu gibi öncelikle kendi boyutları arasında arama yapılır.
  //    Eğer bir eşleşme sağlanmazsa, birincil dil içerisinde; önce birebir aynı boyut, sonra en yakın boyut aranır.
  const secondaryBuilder = (size) => {
    searchAlternativeImage(lang, size).length > 0
      ? componentBuilder(lang, size)
      : searchAlternativeImage(primaryLang, currentSize).length > 0
      ? componentBuilder(primaryLang, currentSize)
      : componentBuilder(primaryLang, size);
  };

  // 4) Birincil dil olduğu için sadece kendi dilindeki resimler kullanılabilmektedir.
  //    Bu sebeple, boyutunun 6.5 ve 5.5 gibi main/default boyutlardan hangisi için uygun olduğu kontrol edilir.
  //    Eğer 5.5'a eşit veya büyükse, 6.5 inch ekran görüntüsü aranacaktır.
  //    Eğer 5.5'dan küçükse, 5.5 inch ekran görüntüsü aranacaktır.
  const primaryBuilder = () => {
    currentSize >= 5.5
      ? componentBuilder(primaryLang, 6.5)
      : componentBuilder(primaryLang, 5.5);
  };

  // 3) Ekran görüntüsünün dili birincil(primary) dil ise primaryBuilder fonksiyonu ile ilerlenir.
  //    Eğer birincil dil değil ise, secondaryBuilder fonksiyonu ile ilerlenir.
  const langCheck = () => {
    lang === primaryLang
      ? primaryBuilder()
      : currentSize >= 5.5
      ? secondaryBuilder(6.5)
      : secondaryBuilder(5.5);
  };

  // 2) Mevcut boyutun kendine ait resmi yoksa diğer fonksiyonlar zinciri devreye girer.
  //    İlk olarak ekran görüntüsünün dili kontrol edilir.
  currentImages === null && langCheck();

  return (
    <section className='w-full'>
      <div className='flex justify-between md:justify-around xl:justify-between gap-7 flex-wrap'>
        {cards}
      </div>
    </section>
  );
};

export default Cards;
