



import data from "../dataFile1/modcontract.json"

export const myScript =  (data) => {

const { FileName, Version, Title, Party, EditorId, Date, NegRound } = data;
const { Language, TableOfContents, Orientation, Preamble } = data;
const { Publisher, Catalogue, ISBN, Part } = data;
const {
  Part: [{ Heading }],
  Part: [{ Label }],
  Part: [{ id }],
  Part: [{ Article }],
} = data;

const [{ Heading: artHead, Label: artlabel, id: artId, Section }] = Article;

const [{ Heading: secHeading, Label: secLabel, id: secId, Paragraph }] =
  Section;

    return(Part.map(function (part) {
        return (
          <div>
            <h4>{part.Label}</h4>
            <h5>{part.Heading}</h5>
            {part.Article.map(function (art) {
              return (
                <div>
                  <h6>{art.Label}</h6>
                  <h4>{art.Heading}</h4>
                  {art.Section.map(function (sec) {
                    return (
                      <div>
                        <h3>
                          {sec.Label} {sec.Heading}
                        </h3>
                        {sec.Paragraph.map(function (para) {
                          return (
                            <div>
                              ({para.Label}) {para.Body}
                              {para.Sentence.map(function (paraSent) {
                                return (
                                  <p className="paraLabel">
                                    ({paraSent.Label}) {paraSent.Content}
                                  </p>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      }))
}




