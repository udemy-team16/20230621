from flask import Blueprint
from flask import render_template

bp = Blueprint("kim", __name__, url_prefix="/kim")


@bp.route("/1", methods=["GET"])
def project1():
    return render_template("kim/1.html")


@bp.route("/2", methods=["GET"])
def project2():
    return render_template("kim/2.html")


@bp.route("/3", methods=["GET"])
def project3():
    return render_template("kim/3.html")


@bp.route("/4", methods=["GET"])
def project4():
    return render_template("kim/4.html")

@bp.route("/5", methods=["GET"])
def project5():
    return render_template("kim/5.html")

@bp.route("/6", methods=["GET"])
def project6():
    return render_template("kim/6.html")
    
@bp.route("/7", methods=["GET"])
def project7():
    return render_template("kim/7.html")