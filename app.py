#!/bin/python


from flask import Flask, render_template, request, jsonify, send_file


app = Flask(__name__)

@app.route("/home")
def index():
    return send_file("templates/index.html")

@app.route("/")
def hello():
		lines = []
		with open("customerdata.txt") as file:
		    for line in file: #low memory consumption iterator. even TB files can be read on a standard laptop.
		        line = line.strip() #or some other preprocessing
		        lines.append(line.split(','))

		orders = 0
		totalAmountOfOrders = 0
		exactOneOrders = 0
		exactTwoOrders = 0
		exactThreeOrders = 0
		exactFourOrders = 0
		fivePlusOrders = 0

		exactOneOrdersList = []
		exactTwoOrdersList = []
		exactThreeOrdersList = []
		exactFourOrdersList = []
		fivePlusOrdersList = []

		newDataList = []
		for data in lines:
			if data[0] != 'Date':
				orders +=1
				totalAmountOfOrders += int(data[3])
				data.pop(0)
				data.pop(2)
				newDataList.append(data)

		multituples = [tuple(l) for l in newDataList]
		from collections import Counter
		tc = Counter(multituples)
		for i in range(len(tc)):
			count = tc[tc.keys()[i]]
			if count == 1:
				exactOneOrders += 1
				exactOneOrdersList.append(tc.keys()[i])
			elif count == 2:
				exactTwoOrders += 1
				exactTwoOrdersList.append(tc.keys()[i])
			elif count == 3:
				exactThreeOrders += 1
				exactThreeOrdersList.append(tc.keys()[i])
			elif count == 4:
				exactFourOrders += 1
				exactFourOrdersList.append(tc.keys()[i])
			else:
				fivePlusOrders += 1
				fivePlusOrdersList.append(tc.keys()[i])

		exactOneOrdersCustomerList = []
		for i in range(len(exactFourOrdersList)):
			exactOneOrdersCustomerList.append({'phone':exactFourOrdersList[i][0], 'name':exactFourOrdersList[i][1]})

		return jsonify({'orders': orders, 'totalAmountOfOrders': totalAmountOfOrders, 'exactOneOrders':exactOneOrders, 'exactTwoOrders':exactTwoOrders, 'exactThreeOrders':exactThreeOrders, 'exactFourOrders':exactFourOrders, 'fivePlusOrders':fivePlusOrders, 'exactOneOrdersCustomerList':exactOneOrdersCustomerList })

if __name__ == "__main__":
    app.run(debug=True)
