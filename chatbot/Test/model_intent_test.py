#models/intent/train_model 
#의도분류 모델 테스트
import os,sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from Utils.Preprocess import Preprocess
from Models.intent.IntentModel import IntentModel

p = Preprocess(word2index_idc='./chatbot_dict.bin', userdic='./Utils/user_dic.tsv')

intent = IntentModel(model_name='./intent_model.h5', preprocess= p )

# query = "학생회조직도 알려줘"
# predict = intent.predict_class(query)
# predict_label = intent.labels[predict]
# print("="*30)
# print(query)
# print("의도 예측 클래스 : ", predict)
# print("의도 예측 레이블 : ", predict_label)


# query = "강의과제등록 알려줘."
# predict = intent.predict_class(query)
# predict_label = intent.labels[predict]
# print("="*30)
# print(query)
# print("의도 예측 클래스 : ", predict)
# print("의도 예측 레이블 : ", predict_label)


# query = "공지사항 알려줘"
# predict = intent.predict_class(query)
# predict_label = intent.labels[predict]
# print("="*30)
# print(query)
# print("의도 예측 클래스 : ", predict)
# print("의도 예측 레이블 : ", predict_label)


query = "교육이념 알려줘"
predict = intent.predict_class(query)
predict_label = intent.labels[predict]
print("="*30)
print(query)
print("의도 예측 클래스 : ", predict)
print("의도 예측 레이블 : ", predict_label)


# query = "교수진 소개"
# predict = intent.predict_class(query)
# predict_label = intent.labels[predict]
# print("="*30)
# print(query)
# print("의도 예측 클래스 : ", predict)
# print("의도 예측 레이블 : ", predict_label)


# query = "교육이수 체계도 알려줘"
# predict = intent.predict_class(query)
# predict_label = intent.labels[predict]
# print("="*30)
# print(query)
# print("의도 예측 클래스 : ", predict)
# print("의도 예측 레이블 : ", predict_label)

# query = "컴공 사이트 주소 알려줘"
# predict = intent.predict_class(query)
# predict_label = intent.labels[predict]
# print("="*30)
# print(query)
# print("의도 예측 클래스 : ", predict)
# print("의도 예측 레이블 : ", predict_label)
# print("="*30)