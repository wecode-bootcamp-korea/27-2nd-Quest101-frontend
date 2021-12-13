import styled from 'styled-components';

import { HiOutlineTrash } from 'react-icons/hi';
import { RiSendPlane2Line } from 'react-icons/ri';

const Community = ({
  commentArray,
  comment,
  onSubmitUserComment,
  commentAdditional,
  onRemoveComment,
}) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const commentDateValue = year + '. ' + month + '. ' + date;
  return (
    <>
      <CommunityContainer>
        <CommunityTitle>커뮤니티</CommunityTitle>
        {commentArray ? (
          <CommentSum>{`${commentArray.length}개의 댓글`}</CommentSum>
        ) : null}
      </CommunityContainer>
      <div />
      <ul>
        {commentArray.map(user => {
          return (
            <CommentContainer key={user.id}>
              <CommentWrap>
                <CommentUserProfile />
                <div>
                  <CommentUser>{user.name}</CommentUser>
                  <CommentDate>{commentDateValue}</CommentDate>
                </div>
                <Comment>{user.comment}</Comment>
              </CommentWrap>
              <RemoveComment onClick={() => onRemoveComment(user.id)} />
            </CommentContainer>
          );
        })}
      </ul>
      <CommentInputWrap onSubmit={onSubmitUserComment}>
        <CommentInput value={comment} onChange={commentAdditional} />
        <CommnetSubmit onClick={onSubmitUserComment} />
      </CommentInputWrap>
    </>
  );
};

const CommunityContainer = styled.div`
  margin-top: 30px;
`;
const CommunityTitle = styled.h1`
  display: inline-block;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontLarge};
`;

const CommentSum = styled.span`
  margin-left: 10px;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontRegular};
`;

const CommentContainer = styled.li`
  ${props => props.theme.flex('row', 'center', 'space-between')};
  padding: 10px 0;
`;

const CommentUserProfile = styled.img.attrs({
  src: 'https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: '프로필사진',
})`
  width: 38px;
  height: 38px;
  margin-right: 10px;
  border-radius: 19px;
`;

const CommentWrap = styled.div`
  ${props => props.theme.flex('row', 'center', 'center')};
`;

const CommentUser = styled.p`
  font-size: ${props => props.theme.fontMicro};
  font-weight: ${props => props.theme.weightBold};
`;

const CommentDate = styled.p`
  margin-top: 4px;
  color: ${props => props.theme.mediumGray};
  font-size: 10px;
`;

const Comment = styled.p`
  margin-left: 10px;
  font-size: ${props => props.theme.fontRegular};
`;

const RemoveComment = styled(HiOutlineTrash)`
  color: ${props => props.theme.mediumGray};
  font-size: ${props => props.theme.fontSemiMedium};
  cursor: pointer;
`;

const CommentInputWrap = styled.form`
  ${props => props.theme.flex(('row', 'center', 'space-between'))};
  margin: 15px 0 30px 0;
  border: ${props => props.theme.borderGray};
  border-radius: 30px;
  background-color: ${props => props.theme.white};
`;

const CommentInput = styled.input.attrs({
  type: `text`,
  placeholder: `댓글을 입력해주세요.`,
})`
  width: 100%;
  padding: 15px;
  margin-left: 20px;
  font-size: ${props => props.theme.fontRegular};
`;

const CommnetSubmit = styled(RiSendPlane2Line)`
  margin-right: 20px;
  color: ${props => props.theme.mediumGray};
  font-size: 23px;
  cursor: pointer;
`;

export default Community;
