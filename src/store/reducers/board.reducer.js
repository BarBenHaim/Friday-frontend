export const SET_BOARDS = 'SET_BOARDS'
export const SET_BOARD = 'SET_BOARD'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_BOARD_MSG = 'ADD_BOARD_MSG'

export const ADD_GROUP = 'ADD_GROUP'
export const UPDATE_GROUP = 'UPDATE_GROUP'
export const REMOVE_GROUP = 'REMOVE_GROUP'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

const initialState = {
    boards: [],
    board: null,
}

export const boardReducer = (state = initialState, action) => {
    let newState = state
    let boards
    switch (action.type) {
        case SET_BOARDS:
            return { ...state, boards: action.boards }
        case SET_BOARD:
            return { ...state, board: action.board }
        case REMOVE_BOARD:
            const lastRemovedBoard = state.boards.find(board => board._id === action.boardId)
            boards = state.boards.filter(board => board._id !== action.boardId)
            return { ...state, boards, lastRemovedBoard }
        case ADD_BOARD:
            return { ...state, boards: [...state.boards, action.board] }
        case UPDATE_BOARD:
            boards = state.boards.map(board => (board._id === action.board._id ? action.board : board))
            return { ...state, boards }
        case ADD_BOARD_MSG:
            return { ...state, board: { ...state.board, msgs: [...(state.board.msgs || []), action.msg] } }
        case ADD_GROUP:
            boards = state.boards.map(board =>
                board._id === action.payload.boardId
                    ? {
                          ...board,
                          groups: [...board.groups, action.payload.group],
                      }
                    : board
            )
            return { ...state, boards }
        case UPDATE_GROUP:
            boards = state.boards.map(board =>
                board._id === action.payload.boardId
                    ? {
                          ...board,
                          groups: board.groups.map(group =>
                              group._id === action.payload.groupId ? action.payload.group : group
                          ),
                      }
                    : board
            )
            return { ...state, boards }
        case REMOVE_GROUP:
            boards = state.boards.map(board =>
                board._id === action.payload.boardId
                    ? {
                          ...board,
                          groups: board.groups.filter(group => group._id !== action.payload.groupId),
                      }
                    : board
            )
            return { ...state, boards }

        case ADD_TASK:
            boards = state.boards.map(board =>
                board._id === action.payload.boardId
                    ? {
                          ...board,
                          groups: board.groups.map(group =>
                              group._id === action.payload.groupId
                                  ? {
                                        ...group,
                                        tasks: [...group.tasks, action.payload.task],
                                    }
                                  : group
                          ),
                      }
                    : board
            )
            return { ...state, boards }
        case UPDATE_TASK:
            boards = state.boards.map(board =>
                board._id === action.payload.boardId
                    ? {
                          ...board,
                          groups: board.groups.map(group =>
                              group._id === action.payload.groupId
                                  ? {
                                        ...group,
                                        tasks: group.tasks.map(task =>
                                            task._id === action.payload.taskId ? action.payload.task : task
                                        ),
                                    }
                                  : group
                          ),
                      }
                    : board
            )
            return { ...state, boards }
        case REMOVE_TASK:
            boards = state.boards.map(board =>
                board._id === action.payload.boardId
                    ? {
                          ...board,
                          groups: board.groups.map(group =>
                              group._id === action.payload.groupId
                                  ? {
                                        ...group,
                                        tasks: group.tasks.filter(task => task._id !== action.payload.taskId),
                                    }
                                  : group
                          ),
                      }
                    : board
            )
            return { ...state, boards }
        default:
            return newState
    }
}
