import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ratione?</Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}