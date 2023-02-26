import axios from "../../axios-base";

const errorBuild = (error) => {
  let resError = "Алдаа гарлаа дахин оролдож үзнэ үү";

  if (resError) {
    resError = error.message;
  }

  if (error.response !== undefined && error.response.status !== undefined) {
    resError = error.response.status;
  }
  if (
    error.response !== undefined &&
    error.response.data !== undefined &&
    error.response.data.error !== undefined
  ) {
    resError = error.response.data.error.message;
  }
  return resError;
};

export const saveNewsComment = (linkData) => {
  return {
    type: "CREATE_NEWS_COMMENT",
    linkData: linkData,
  };
};

export const editNewsComment = (index, data) => {
  return {
    type: "EDIT_NEWS_COMMENT",
    editIndex: index,
    editData: data,
  };
};

export const deleteNewsComment = (ids) => {
  return function (dispatch) {
    dispatch(deleteNewsCommentStart());
    axios
      .delete("newscomments/delete", { params: { id: ids } })
      .then((response) => {
        const deleteResult = response.data.data;
        dispatch(deleteNewsCommentSuccess(deleteResult));
        dispatch(loadNewsComments());
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(deleteNewsCommentError(resError));
      });
  };
};

const deleteNewsCommentStart = () => {
  return {
    type: "DELETE_NEWS_COMMENT_START",
  };
};

const deleteNewsCommentSuccess = (result) => {
  return {
    type: "DELETE_NEWS_COMMENT_SUCCESS",
    deleteResult: result,
  };
};

const deleteNewsCommentError = (error) => {
  return {
    type: "DELETE_NEWS_COMMENT_ERROR",
    error: error,
  };
};

export const getNewsComment = (id) => {
  return function (dispatch) {
    dispatch(getNewsCommentStart());
    axios
      .get(`/newscomments/${id}`)
      .then((response) => {
        const result = response.data.data;
        dispatch(getNewsCommentSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getNewsCommentError(resError));
      });
  };
};

export const getNewsCommentStart = () => {
  return {
    type: "GET_NEWS_COMMENT_START",
  };
};

export const getNewsCommentSuccess = (data) => {
  return {
    type: "GET_NEWS_COMMENT_SUCCESS",
    link: data,
  };
};

export const getNewsCommentError = (error) => {
  return {
    type: "GET_NEWS_COMMENT_ERROR",
    error,
  };
};

export const loadNewsComments = (query = "") => {
  return function (dispatch) {
    dispatch(loadNewsCommentStart());
    axios
      .get(`newscomments?${query}`)
      .then((response) => {
        const result = response.data.data;
        const pagination = response.data.pagination;
        dispatch(loadNewsCommentSuccess(result));
        dispatch(loadPagination(pagination));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(loadNewsCommentError(resError));
      });
  };
};

export const loadNewsCommentStart = () => {
  return {
    type: "LOAD_NEWS_COMMENT_START",
  };
};

export const loadNewsCommentSuccess = (result) => {
  return {
    type: "LOAD_NEWS_COMMENT_SUCCESS",
    resultNewsComments: result,
  };
};

export const loadNewsCommentError = (error) => {
  return {
    type: "LOAD_NEWS_COMMENT_ERROR",
    error,
  };
};

export const updateNewsComment = (id, data) => {
  return function (dispatch) {
    dispatch(updateNewsCommentStart());
    axios
      .put(`newscomments/${id}`, data)
      .then((response) => {
        const result = response.data.data;
        dispatch(updateNewsCommentSuccess(result));
        dispatch(loadNewsComments());
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(updateNewsCommentError(resError));
      });
  };
};

export const updateNewsCommentStart = () => {
  return {
    type: "UPADTE_NEWS_COMMENT_START",
  };
};

export const loadPagination = (pagination) => {
  return {
    type: "LOAD_NEWSCOMMENT_PAGINATION",
    pagination,
  };
};

export const updateNewsCommentSuccess = (result) => {
  return {
    type: "UPDATE_NEWS_COMMENT_SUCCESS",
    updateResult: result,
  };
};

export const updateNewsCommentError = (error) => {
  return {
    type: "UPDATE_NEWS_COMMENT_ERROR",
    error,
  };
};

export const getCountNewsComment = () => {
  return function (dispatch) {
    dispatch(getCountNewsCommentStart());

    axios
      .get(`newscomments/count`)
      .then((response) => {
        const result = response.data.data;
        dispatch(getCountNewsCommentSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getCountNewsCommentError(resError));
      });
  };
};

export const getCountNewsCommentStart = () => {
  return {
    type: "GET_COUNT_NEWSCOMMENT_START",
  };
};

export const getCountNewsCommentSuccess = (result) => {
  return {
    type: "GET_COUNT_NEWSCOMMENT_SUCCESS",
    orderCount: result,
  };
};

export const getCountNewsCommentError = (error) => {
  return {
    type: "GET_COUNT_NEWSCOMMENT_ERROR",
    error,
  };
};

// Excel news
export const getExcelData = (query) => {
  return function (dispatch) {
    dispatch(getExcelDataStart());
    axios
      .get("newscomments/excel?" + query)
      .then((response) => {
        const data = response.data.data;
        dispatch(getExcelDataSuccess(data));
      })
      .catch((error) => {
        let resError = errorBuild(error);
        dispatch(getExcelDataError(resError));
      });
  };
};

const getExcelDataStart = () => {
  return {
    type: "GET_NEWSCOMMENT_EXCELDATA_START",
  };
};

const getExcelDataSuccess = (data) => {
  return {
    type: "GET_NEWSCOMMENT_EXCELDATA_SUCCESS",
    excel: data,
  };
};

const getExcelDataError = (error) => {
  return {
    type: "GET_NEWSCOMMENT_EXCELDATA_ERROR",
    error,
  };
};
