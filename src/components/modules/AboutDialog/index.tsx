import React, { useCallback } from 'react';
import { displayedAboutDialogState } from '~/status/atoms/displayedAboutDialog';
import styles from './styles.scss';
import { useRecoilState } from 'recoil';
import TimeUtilities from '~/utilities/time';
import { ISODates } from '~/data';

const FIRST_DATE = TimeUtilities.parseJaYYYYMMDDString(TimeUtilities.getDate(ISODates.Constants.FIRST_DATE));
const LAST_DATE = TimeUtilities.parseJaYYYYMMDDString(TimeUtilities.getDate(ISODates.Constants.LAST_DATE));

const AboutDialog = () => {
  const [displayedAboutDialog, setDisplayedAboutDialog] = useRecoilState(displayedAboutDialogState);
  const setDisplayed = useCallback(() => setDisplayedAboutDialog(false), []);

  return displayedAboutDialog ? (
    <div className={styles.aboutDialog}>
      <article className={styles.aboutDialog__document}>
        <h2 className={styles.aboutDialog__title}>X Grapher について</h2>
        <p className={styles.aboutDialog__paragraph}>
          X Grapher は、Google の「
          <a href="https://www.google.com/covid19/mobility/" target="_blank">
            Covid-19 Community Mobility Reports
          </a>
          」と、気象庁の「
          <a href="https://www.data.jma.go.jp/gmd/risk/obsdl/index.php" target="_blank">
            過去の気象データ
          </a>
          」を使ったインタラクティブインフォグラフィックです。
          <br />
          ここでは、狙いや、利用上の注意点を述べていきます。
        </p>
        <section className={styles.aboutDialog__section}>
          <h3 className={styles.aboutDialog__sectionTitle}>狙いについて</h3>
          <p className={styles.aboutDialog__paragraph}>
            このインフォグラフィックは、横棒グラフのデータとして「Covid-19 Community Mobillity
            Reports」を、そしてグラフの位置の順序を決めるデータとして「過去の気象データ」を使っています。
            <br />
            つまり、横棒グラフのデータとグラフの並び順は全く違うデータを使っているため、読みやすくてわかりやすいインフォグラフィックではないはずです。
            <br />
          </p>
          <p className={styles.aboutDialog__paragraph}>
            あえてこのようなグラフィックを作ったことにはもちろん理由があります。
          </p>
          <p className={styles.aboutDialog__paragraph}>
            新型コロナウイルスによって人の動きは変わりましたが、もともと人々の行動は気象によっても大きく変わるはずです。
            <br />
            さらに、休日であるか否かも人々の行動は変わるはずです。
            <br />
            私たちは様々な環境下で生活していたにも関わらず、ここ数ヶ月でさらに「新型コロナウイルス」という状況も加わり、自分たちの生活をより思索していく必要が出てきました。
            <br />
            人の動きに対して大きく作用するこの2つのデータをあえて合わせてグラフ化し、多様なデータの切り替えが可能になるようにデザインしました。
            <br />
            様々なデータの切り取り方ができるこのグラフィックと対話することで、何か発見できたり、知見を得たり、思索したり、学んだりしていただけたら大変うれしいです。
          </p>
        </section>
        <section className={styles.aboutDialog__section}>
          <h3 className={styles.aboutDialog__sectionTitle}>Covid-19 Community Mobility Reports について</h3>
          <p className={styles.aboutDialog__paragraph}>
            このインフォグラフィックの横棒グラフに「
            <a href="https://www.google.com/covid19/mobility/" target="_blank">
              Covid-19 Community Mobility Reports
            </a>
            」 のデータをダウンロードして使っています。
            <br />
            このデータの注意事項として、以下のように書かれています。
          </p>
          <blockquote className={styles.aboutDialog__quote}>
            <p>
              位置情報の精度と各カテゴリの情報取得状況は地域によって異なるため、このデータを使用して国家間、または異なる特徴をもつ地域間（地方と都会など）で変化を比較することはおすすめしません。
            </p>
            <p className={styles.aboutDialog__quoteSource}>
              引用元：
              <a
                href="https://www.google.com/covid19/mobility/data_documentation.html?hl=ja"
                target="_blank"
                className={styles.aboutDialog__quoteSourceLink}
              >
                https://www.google.com/covid19/mobility/data_documentation.html?hl=ja
              </a>
            </p>
          </blockquote>
          <p className={styles.aboutDialog__paragraph}>
            このインフォグラフィックでは都道府県ごとにグラフを表示しているため、上記引用文の助長してしまっている可能性があります。
            <br />
            都道府県ごとの違いにあまりフォーカスせず、気象データとの関わりや変化を楽しんでいただきたいです。
            <br />
            様々なこと学んだり思索したりしていただきたいと考えていますが、このグラフィックはあくまでも二次情報であることをご理解頂いた上で閲覧していただければ幸いです。
          </p>
          <p className={styles.aboutDialog__paragraph}>
            より詳細な注意事項を知りたい場合は、以下のリンクをご確認ください。
            <br />・
            <a href="https://www.google.com/covid19/mobility/data_documentation.html?hl=ja" target="_blank">
              モビリティ レポートの CSV ドキュメント
            </a>
            <br />・
            <a href="https://support.google.com/covid19-mobility?hl=ja" target="_blank">
              コミュニティ モビリティ レポート ヘルプ
            </a>
          </p>
          <p className={styles.aboutDialog__paragraph}>
            また、このインフォグラフィックで Covid-19 Community Mobility Reports のデータを扱いやすくするために CSV{' '}
            データの加工を行っています（数値データの数値自体を変える処理は一切入れていません）。
            <br />
            より詳しく、加工ロジック等を知りたい方は{' '}
            <a
              href="https://github.com/hiraryo0213/x-grapher/blob/master/data/Google/Covid-19CommunityMobilityReports/README.md"
              target="_blank"
            >
              こちら
            </a>{' '}
            をご覧ください。
            <br />
            データのダウンロードは手動で行っているため、データが更新されていても、このインフォグラフィックで使用しているデータが瞬時に更新されることはありません。
          </p>
        </section>
        <section className={styles.aboutDialog__section}>
          <h3 className={styles.aboutDialog__sectionTitle}>過去の気象データについて</h3>
          <p className={styles.aboutDialog__paragraph}>
            このインフォグラフィックの並び順のデータとして「
            <a href="https://www.data.jma.go.jp/gmd/risk/obsdl/index.php" target="_blank">
              過去の気象データ
            </a>
            」 のデータを使用しています。
            <br />
            上記の URL から、最高気温、最低気温、最大風速、降水量、日照時間の CSV データをダウンロードしています。
            <br />
            観測地点はすべて県庁所在地がある場所としています。地点名はグラフの都道府県名をクリックすると見られますので、ぜひご覧ください。
            <br />
            また、都道府県名を押すと、現在ソートしている気象データの数値（最大風速の場合は風向もあります）を見られます。気象データでソートをしていない場合（「指定なし」を選んでいる場合）のときは、県庁所在地名のみが表示されます。
            <br />
            期間は Covid-19 Community Mobility Reports のデータに合わせて、{FIRST_DATE} から {LAST_DATE}{' '}
            までとしています。
          </p>
          <p className={styles.aboutDialog__paragraph}>
            このインフォグラフィックで気象データのデータを扱いやすくするために CSV{' '}
            データの加工を行っています（こちらも数値データの数値自体を変える処理は一切入れていません）。
            <br />
            より詳しく、加工ロジック等を知りたい方は{' '}
            <a
              href="https://github.com/hiraryo0213/x-grapher/blob/master/data/JapanMeteorologicalAgency/README.md"
              target="_blank"
            >
              こちら
            </a>{' '}
            をご覧ください。
          </p>
        </section>
      </article>
      <p className={styles.aboutDialog__close}>
        <button className={styles.aboutDialog__closeButton} onClick={setDisplayed}>
          閉じる
        </button>
      </p>
    </div>
  ) : null;
};

export default AboutDialog;
