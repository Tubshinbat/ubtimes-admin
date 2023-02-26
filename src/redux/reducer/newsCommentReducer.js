const initialState = {
  loading: false,
  error: null,
  success: null,
  comments: [],
  paginationLast: {},
  excelData: [],
  comment: {},
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_NEWS_COMMENT":
      return {
        ...state,
        error: null,
        success: null,
      };

    case "LOAD_NEWS_COMMENT_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        comments: [],
      };

    case "LOAD_NEWS_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        comments: action.resultNewsComments,
      };

    case "LOAD_NEWS_COMMENT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        comments: [],
        error: action.error,
      };

    case "LOAD_NEWSCOMMENT_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };
    // EXCEL
    case "GET_NEWS_COMMENT_EXCELDATA_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        excelData: [],
      };

    case "GET_NEWS_COMMENT_EXCELDATA_SUCCESS":
      return {
        ...state,
        loading: false,
        excelData: action.excel,
      };

    case "GET_NEWS_COMMENT_EXCELDATA_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
        excelData: [],
      };

    // SAVE
    case "CREATE_NEWS_COMMENT_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_NEWS_COMMENT_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_NEWS_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        comment: action.comment,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_NEWS_COMMENT_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "DELETE_NEWS_COMMENT_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_NEWS_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_NEWS_COMMENT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_NEWS_COMMENT_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        comment: {},
      };

    case "GET_NEWS_COMMENT_START":
      return {
        ...state,
        loading: true,
        comment: {},
        error: null,
      };

    case "GET_NEWS_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        comment: action.singleNews,
        error: null,
      };

    case "GET_NEWS_COMMENT_ERROR":
      return {
        ...state,
        loading: false,
        comment: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_NEWS_COMMENT_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_NEWS_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_NEWS_COMMENT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };
    case "UPDATE_END":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
      };
    // EXCEL
    case "GET_NEWSCOMMENT_EXCELDATA_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        excelData: [],
      };

    case "GET_NEWSCOMMENT_EXCELDATA_SUCCESS":
      return {
        ...state,
        loading: false,
        excelData: action.excel,
      };

    case "GET_NEWSCOMMENT_EXCELDATA_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
        excelData: [],
      };

    // GET COUNT
    case "GET_COUNT_NEWSCOMMENT_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_NEWSCOMMENT_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_NEWSCOMMENT_ERROR":
      return {
        ...state,
        countLoading: false,
        totalCount: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
